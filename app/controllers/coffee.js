const CoffeService = require('../services/coffee');

class CoffeController {
    static async getCoffees(req, res) {
        try {
            const coffees = await new CoffeService().getCoffes();
            return res.json(coffees);
        }
        catch (err) {
            console.log(err);
            return res.status(500).send(err);
        }
    }

    static async getCoffeeById(req, res) {
        try {
            const id = parseInt(req.params.id);
            const coffee = await new CoffeService().getCoffeById(id);
            return res.json(coffee);
        }
        catch (err) {
            console.log(err);
            return res.status(500).send(err);
        }
    }

    static async createCoffee(req, res) {
        try {
            const coffee = await new CoffeService().createCoffe(req.body);
            return res.json(coffee);
        }
        catch (err) {
            console.log(err);
            return res.status(500).send(err);
        }
    }

    static async updateCoffee(req, res) {
        try {
            const id = parseInt(req.params.id);
            const coffee = await new CoffeService().updateCoffe(id, req.body);
            
            
            return res.json(coffee);
        }
        catch (err) {
            console.log(err);
            return res.status(500).send(err);
        }
    }

    static async deleteCoffee(req, res) {
        try {
            const id = parseInt(req.params.id);
            const coffee = await new CoffeService().deleteCoffee(id);
            return res.json(coffee);
        }
        catch (err) {
            console.log(err);
            return res.status(500).send(err);
        }
    }

    
}


module.exports = CoffeController;