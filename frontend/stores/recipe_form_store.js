const Store = require('flux/utils').Store;
const AppDispatcher = require('../dispatcher/dispatcher');
const RecipeConstants = require('../constants/recipe_constants');

const RecipeFormStore = new Store(AppDispatcher);

RecipeFormStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case "RECIPE_CREATED":
      this.__emitChange();
      break;
  }
};

module.exports = RecipeFormStore;
