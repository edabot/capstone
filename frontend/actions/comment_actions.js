const AppDispatcher = require('../dispatcher/dispatcher');
const CommentConstants = require('../constants/comment_constants');
const CommentApiUtil = require('../util/comment_api_util');

const CommentActions = {
  addLike(recipeId){
    CommentApiUtil.create(recipeId, CommentActions.receiveNewLike);
  },
  destroyLike(likeId){
    CommentApiUtil.destroy(likeId, CommentActions.removeLike);
  },
  receiveNewLike(like){
    AppDispatcher.dispatch({
      actionType: CommentConstants.ADDED_COMMENT,
      like: like
    });
  },
  removeLike(like){
    AppDispatcher.dispatch({
      actionType: CommentConstants.REMOVED_COMMENT,
      like: like
    });
  }
};

module.exports = CommentActions;
