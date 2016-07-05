const AppDispatcher = require('../dispatcher/dispatcher');
const UserApiUtil = require('../util/user_api_util');
const UserConstants = require('../constants/user_constants');

const UserActions = {
  getUserPage(userId){
    UserApiUtil.userPage(userId, this.receiveUserPage);
  },
  receiveUserPage(user) {
    AppDispatcher.dispatch({
      actionType: UserConstants.USER_RECEIVED,
      user: user
    });
  },
};

module.exports = UserActions;
