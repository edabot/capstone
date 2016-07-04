const Store = require('flux/utils').Store;
const Dispatcher = require('../dispatcher/dispatcher');
const SessionConstants = require('../constants/session_constants');
const RecipeActions = require('../actions/recipe_actions');

const SessionStore = new Store(Dispatcher);

let _currentUser = {};

const _login = function(currentUser){
  _currentUser = currentUser;
  RecipeActions.getRecipeIndex();
};

const _logout = function(){
  _currentUser = {};
  RecipeActions.getRecipeIndex();
  SessionStore.__emitChange();
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
    break;
  }
};

module.exports = SessionStore;
