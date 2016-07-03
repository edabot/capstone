const SessionApiUtil = require('../util/session_api_util');
const Dispatcher = require('../dispatcher/dispatcher');
const SessionConstants = require('../constants/session_constants');
const ErrorActions = require('./error_actions');
const ErrorConstants = require('../constants/error_constants');
const RecipeActions = require('./recipe_actions');

const SessionActions = {
  signup(user){
    SessionApiUtil.signup(user,
      SessionActions.receiveCurrentUser,
      ErrorActions.setErrors);
  },
  login(user){
    SessionApiUtil.login(user,
      SessionActions.receiveCurrentUser,
      ErrorActions.setErrors);
  },
  logout(){
    SessionApiUtil.delete(SessionActions.removeCurrentUser,
      ErrorActions.setErrors);
  },
  receiveCurrentUser(currentUser){
    Dispatcher.dispatch({
      actionType: SessionConstants.LOGIN,
      currentUser: currentUser
    });
    Dispatcher.dispatch({
      actionType: ErrorConstants.CLEAR_ERRORS,
    });
  },
  removeCurrentUser(){
    Dispatcher.dispatch({
      actionType: SessionConstants.LOGOUT
    });
    Dispatcher.dispatch({
      actionType: ErrorConstants.CLEAR_ERRORS,
    });
  }
};

module.exports = SessionActions;
