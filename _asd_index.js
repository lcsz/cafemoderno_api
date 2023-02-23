const dotenv = require('dotenv');
dotenv.config();
const DB = require('./db');
const Coffee = require('./models/coffee');
const Attribute = require('./models/attribute');


(async () => {


    async function find(sequelize) {
        const coffeeModel = new Coffee(sequelize).init();
        const coffee = await coffeeModel.findByPk(1);
        console.log(coffee);
    }



    try {
        const sequelize = await DB.getSequelize();
        const coffee = new Coffee(sequelize).init();
        const attribute = new Attribute(sequelize).init();
        await sequelize.sync();


        // const resultadoCreate = await coffee.
        // console.log(resultadoCreate);


        // ["Docinho", "Intenso", "Frutado", "Leve", "Aromatizado"].forEach(async (el) => {
        //     const insertAttr = await attribute.create({ name: el });
        //     console.log(insertAttr);
        // });

        const x = await find(sequelize);

    } catch (error) {
        console.log(error);
    }

})()