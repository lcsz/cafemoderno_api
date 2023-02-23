const {
    SecretsManagerClient,
    GetSecretValueCommand,
} = require("@aws-sdk/client-secrets-manager");

class SecretManager {
    #secret_name;
    
    constructor() {
        this.#secret_name = process.env.SECRET_NAME;
    }

    async get() {
        const client = new SecretsManagerClient({
            region: process.env.REGION,
            credentials: {
                accessKeyId: process.env.CREDENTIALS_ACCESS_KEY_ID,
                secretAccessKey: process.env.CREDENTIALS_SECRET_ACCESS_KEY,
            }
        });

        let response;

        try {
            response = await client.send(
                new GetSecretValueCommand({
                    SecretId: this.#secret_name,
                    VersionStage: "AWSCURRENT",
                })
            );
        } catch (error) {
            throw error;
        }

        const secret = JSON.parse(response.SecretString);
        return secret;
    }

}

module.exports = SecretManager;