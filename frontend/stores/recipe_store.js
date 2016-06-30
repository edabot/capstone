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

const removeRecipe = function(recipe) {
  delete _recipes[recipe.id];
};

RecipeStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case RecipeConstants.RECIPES_RECEIVED:
      setRecipes(payload.recipes);
      this.__emitChange();
      break;
    case RecipeConstants.RECIPE_RECEIVED:
      setRecipe(payload.recipe);
      this.__emitChange();
      break;
    case RecipeConstants.RECIPE_REMOVED:
      removeRecipe(payload.recipe);
      this.__emitChange();
      break;
  }
};

module.exports = RecipeStore;
