const AppDispatcher = require('../dispatcher/dispatcher');
const TagConstants = require('../constants/tag_constants');
const TagApiUtil = require('../util/tag_api_util');

const TagActions = {
  getRecipes(tagName){
    TagApiUtil.index(tagName,
       TagActions.receiveRecipes);
  },
  getSidebar(){

    TagApiUtil.indexSidebar(TagActions.receiveSidebar);
  },
  receiveRecipes(tagName, recipes){
    AppDispatcher.dispatch({
      actionType: TagConstants.RECEIVED_TAG_RECIPES,
      recipes: recipes,
      tagName: tagName
    });
  },
  receiveSidebar(sidebar){
    AppDispatcher.dispatch({
      actionType: TagConstants.RECEIVED_SIDEBAR,
      sidebar: sidebar
    });
  }
};

module.exports = TagActions;
