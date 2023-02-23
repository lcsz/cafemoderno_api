const Sequelize = require('sequelize');

class Coffee {
    constructor(sequelize) {
        this.sequelize = sequelize;
    }

    init() {
        return this.sequelize.define('coffee', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false
            },
            description: Sequelize.STRING,
            producer: Sequelize.STRING,
            points: Sequelize.DOUBLE
        });
    }
}




module.exports = Coffee;