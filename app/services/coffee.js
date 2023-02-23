const DB = require('../../db');
const Coffee = require('../models/coffee');

class CoffeService {
    async getCoffes() {
        const sequelize = await DB.getSequelize();
        const coffeeModel = new Coffee(sequelize).init();
        return await coffeeModel.findAll();
    }

    async getCoffeById(id) {
        const sequelize = await DB.getSequelize();
        const coffeeModel = new Coffee(sequelize).init();
        return await coffeeModel.findByPk(id);
    }

    async createCoffe(coffeeData) {
        const sequelize = await DB.getSequelize();
        const coffeeModel = new Coffee(sequelize).init();
        return await coffeeModel.create(coffeeData);
    }

    async updateCoffe(id, coffeeData) {
        const sequelize = await DB.getSequelize();
        const coffeeModel = new Coffee(sequelize).init();
        const dataModel = await coffeeModel.findByPk(id);
        Object.keys(coffeeData).forEach(el => { dataModel[el] = coffeeData[el] });
        return await dataModel.save();
    }

    async deleteCoffee(id) {
        const sequelize = await DB.getSequelize();
        const coffeeModel = new Coffee(sequelize).init();
        const dataModel = await coffeeModel.findByPk(id);
        return await dataModel.destroy();
    }
}

module.exports = CoffeService;