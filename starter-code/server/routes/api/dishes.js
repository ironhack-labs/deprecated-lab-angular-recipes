const express    = require('express');
const router     = express.Router();
// const Dish      = require('../../models/dish');
const foods     = require('./seeds')

router.get('/', (req, res, next) => {
    return res.json(foods);
});

router.get('/:id', (req, res, next) => {
  return res.json(foods.filter(dish => req.params.id === dish.name)[0]);
});

router.post('/', (req, res, next) => {
  const newDish = new Dish({
    name: req.body.name,
    description: req.body.description,
    image: req.body.image
  });

  newDish.save( (err) => {
    if (err) { return res.status(500).json(err); }

    return res.status(200).json(newDish);
  });
});

module.exports = router;
