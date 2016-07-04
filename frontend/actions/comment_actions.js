const AppDispatcher = require('../dispatcher/dispatcher');
const CommentConstants = require('../constants/comment_constants');
const CommentApiUtil = require('../util/comment_api_util');

const CommentActions = {
  addComment(comment){
    CommentApiUtil.create(comment, CommentActions.receiveNewComment);
  },
  destroyLike(commentId){
    CommentApiUtil.destroy(commentId, CommentActions.removeLike);
  },
  receiveNewComment(comment){
    AppDispatcher.dispatch({
      actionType: CommentConstants.ADDED_COMMENT,
      comment: comment
    });
  },
  removeComment(comment){
    AppDispatcher.dispatch({
      actionType: CommentConstants.REMOVED_COMMENT,
      comment: comment
    });
  }
};

module.exports = CommentActions;
