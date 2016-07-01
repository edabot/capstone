const AppDispatcher = require('../dispatcher/dispatcher');
const LikeConstants = require('../constants/like_constants');
const LikeApiUtil = require('../util/like_api_util');

const LikeActions = {
  addLike(recipeId){
    LikeApiUtil.create({recipe_id: recipeId},
       LikeActions.receiveLike);
  },
  destroyLike(recipeId){
    LikeApiUtil.destroy({recipe_id: recipeId},
       LikeActions.removeLike);
  },
  receiveLike(like){
    AppDispatcher.dispatch({
      actionType: LikeConstants.ADDED_LIKE,
      like: like
    });
  },
  removeLike(like){
    AppDispatcher.dispatch({
      actionType: LikeConstants.REMOVED_LIKE,
      like: like
    });
  }
};

module.exports = LikeActions;
