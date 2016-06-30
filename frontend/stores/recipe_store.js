const Store = require('flux/utils').Store;
const AppDispatcher = require('../dispatcher/dispatcher');
const RecipeConstants = require('../constants/recipe_constants');

const RecipeStore = new Store(AppDispatcher);

let _recipes = {};

RecipeStore.getRecipe = function(id){
  return _recipes[id];
};

RecipeStore.getRecipes = function() {
  return Object.assign({}, _recipes);
};

const setRecipes = function(recipes) {
  _recipes = recipes;
};

const setRecipe = function(recipe) {
  _recipes[recipe.id] = recipe;
};

RecipeStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case RecipeConstants.RECIPES_RECEIVED:

      break;
    case RecipeConstants.RECIPE_RECEIVED:

      break;
  }
};

module.exports = RecipeStore;
