const Store = require('flux/utils').Store;
const Dispatcher = require('../dispatcher/dispatcher');
const UserConstants = require('../constants/user_constants');

const UserStore = new Store(Dispatcher);

let _user = {};

UserStore.getUser = function() {
  return Object.assign({}, _user);
};

const setUser = function(user) {
  _user = user;
};

UserStore.__onDispatch = function(payload){
  switch(payload.actionType) {
  case UserConstants.USER_RECEIVED:
    setUser(payload.user);
    UserStore.__emitChange();
    break;
  }
};

module.exports = UserStore;
