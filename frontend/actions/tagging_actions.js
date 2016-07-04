const AppDispatcher = require('../dispatcher/dispatcher');
const TaggingConstants = require('../constants/like_constants');
const TaggingApiUtil = require('../util/like_api_util');

const LikeActions = {
  addLike(recipeId){
    TaggingApiUtil.create({recipe_id: recipeId},
       LikeActions.receiveLike);
  },
  destroyLike(recipeId){
    TaggingApiUtil.destroy({recipe_id: recipeId},
       LikeActions.removeLike);
  },
  receiveLike(like){
    AppDispatcher.dispatch({
      actionType: TaggingConstants.TAGGING_ADDED,
      like: like
    });
  },
  removeLike(like){
    AppDispatcher.dispatch({
      actionType: TaggingConstants.TAGGING_REMOVED,
      like: like
    });
  }
};

module.exports = LikeActions;
