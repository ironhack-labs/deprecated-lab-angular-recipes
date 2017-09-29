const express    = require('express');
const router     = express.Router();
const Ingredient = require('../../models/ingredient');

router.get('/', (req, res, next) => {
  console.log("GET INGREDIENTS");
  Ingredient.find()
    .then(ingredientsList => res.status(200).json(ingredientsList))
    .catch(e => res.status(500).json({error:e.message}));
});

router.get('/:id', (req, res, next) => {
  Ingredient.findById(req.params.id, (err, ingredient) => {
    if (err)         { return res.status(500).json(err); }
    if (!ingredient) { return res.status(404).json(new Error("404")) }

    return res.json(ingredient);
  });
});

router.post('/', (req, res, next) => {
  const newIngredient = new Ingredient({
    name: req.body.name,
    description: req.body.description,
    image: req.body.image
  });

  newIngredient.save( (err) => {
    if (err) { return res.status(500).json(err); }

    return res.status(200).json(newIngredient);
  });
});

module.exports = router;
