const AppDispatcher = require('../dispatcher/dispatcher');
const TaggingConstants = require('../constants/like_constants');
const TaggingApiUtil = require('../util/like_api_util');

const LikeActions = {
  addLike(tagName, recipeId){
    TaggingApiUtil.create({tag_name: tagName, recipe_id: recipeId},
       LikeActions.receiveLike);
  },
  destroyLike(tagName, recipeId){
    TaggingApiUtil.delete({tag_name: tagName, recipe_id: recipeId},
       LikeActions.removeLike);
  },
  receiveLike(tagging){
    AppDispatcher.dispatch({
      actionType: TaggingConstants.TAGGING_RECEIVED,
      tagging: tagging
    });
  },
  removeLike(tagging){
    AppDispatcher.dispatch({
      actionType: TaggingConstants.TAGGING_REMOVED,
      tagging: tagging
    });
  }
};

module.exports = LikeActions;
