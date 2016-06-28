const Store = require('flux/utils').Store;
const Dispatcher = require('../dispatcher/dispatcher');
const SessionConstants = require('../constants/session_constants');

const SessionStore = new Store(Dispatcher);

let _currentUser = {};

const _login = function(currentUser){
  console.log("logged in!");
  _currentUser = currentUser;
};

const _logout = function(){
  console.log("logged out!");
  _currentUser = {};
};

SessionStore.currentUser = function() {
  return Object.assign({}, _currentUser);
};

SessionStore.isUserLoggedIn = function(){
  return Object.keys(_currentUser).length !== 0;
};

SessionStore.__onDispatch = function(payload){
  switch(payload.actionType) {
  case SessionConstants.LOGIN:
    _login(payload.currentUser);
    SessionStore.__emitChange();
    break;
  case SessionConstants.LOGOUT:
    _logout();
    SessionStore.__emitChange();
    break;
  }
};

module.exports = SessionStore;
