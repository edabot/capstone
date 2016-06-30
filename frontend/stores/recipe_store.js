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
  console.log("dispatched "+ payload.actionType);
  switch (payload.actionType) {
    case RecipeConstants.RECIPES_RECEIVED:
      setRecipes(payload.recipes);
      break;
    case RecipeConstants.RECIPE_RECEIVED:
      setRecipe(payload.recipe);
      console.log("setting recipe");
      break;
    case RecipeConstants.RECIPE_REMOVED:
      removeRecipe(payload.recipe);
      console.log("removing recipe");
      break;
  }
};

module.exports = RecipeStore;
