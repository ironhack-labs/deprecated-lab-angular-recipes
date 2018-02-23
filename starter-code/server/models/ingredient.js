const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const IngredientSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: String,
  image: String
});

module.exports = mongoose.model('Ingredient', IngredientSchema);
