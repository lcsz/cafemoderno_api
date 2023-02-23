const Sequelize = require('sequelize');

class Attribute {
    constructor(sequelize) {
        this.sequelize = sequelize;
    }

    init() {
        return this.sequelize.define('attribute', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false
            }
        });
    }
}

module.exports = Attribute;