const AppDispatcher = require('../dispatcher/dispatcher');
const FollowConstants = require('../constants/follow_constants');
const FollowApiUtil = require('../util/follow_api_util');

const FollowActions = {
  addFollow(leaderId){
    FollowApiUtil.create({leader_id: leaderId},
       FollowActions.receiveFollow);
  },
  destroyFollow(leaderId){
    FollowApiUtil.destroy({leader_id: leaderId},
       FollowActions.removeFollow);
  },
  receiveFollow(follow){
    AppDispatcher.dispatch({
      actionType: FollowConstants.ADDED_FOLLOW,
      follow: follow
    });
  },
  removeFollow(follow){
    AppDispatcher.dispatch({
      actionType: FollowConstants.REMOVED_FOLLOW,
      follow: follow
    });
  }
};

module.exports = FollowActions;
