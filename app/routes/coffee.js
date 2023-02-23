const CafeController = require('../controllers/coffee');
const router = require('express').Router();


router.get('/', CafeController.getCoffees);
router.get('/:id', CafeController.getCoffeeById);
router.post('/', CafeController.createCoffee);
router.put('/:id', CafeController.updateCoffee);
router.delete('/:id', CafeController.deleteCoffee);

module.exports = router