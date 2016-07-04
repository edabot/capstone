const AppDispatcher = require('../dispatcher/dispatcher');
const TagConstants = require('../constants/tag_constants');
const TagApiUtil = require('../util/tag_api_util');

const TagActions = {
  getRecipes(tagName){
    TagApiUtil.index(tagName,
       TagActions.receiveRecipes);
  },
  receiveRecipes(tagName, recipes){
    AppDispatcher.dispatch({
      actionType: TagConstants.RECEIVED_TAG_RECIPES,
      recipes: recipes,
      tagName: tagName
    });
  }
};

module.exports = TagActions;
