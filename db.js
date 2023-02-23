const Sequelize = require('sequelize');
const SecretManager = require('./secret-manager');

class DB {
    static squelize;

    static async getSequelize() {
        if (this.squelize == null) {

            const secret = await new SecretManager().get();
            const connectionString = `postgresql://${secret.username}:${encodeURI(secret.password)}@${process.env.DB_HOST}`;
            this.squelize = new Sequelize(connectionString, { dialect: 'postgres' });
        }
        return this.squelize;
    }
}

module.exports = DB;