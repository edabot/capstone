const Store = require('flux/utils').Store;
const Dispatcher = require('../dispatcher/dispatcher');
const SessionConstants = require('../constants/session_constants');
const RecipeActions = require('../actions/recipe_actions');
const UserConstants = require('../constants/user_constants');

const SessionStore = new Store(Dispatcher);

let _currentUser = {};

const _login = function(currentUser){
  _currentUser = currentUser;
  RecipeActions.getRecipeIndex();
};

const _updateImage = function(imageUrl) {
  _currentUser.image_url = imageUrl;
};

const _logout = function(){
  _currentUser = {};
  RecipeActions.getRecipeIndex();
};

SessionStore.currentUser = function() {
  return Object.assign({}, _currentUser);
};

SessionStore.isUserLoggedIn = function(){
  return (Object.keys(this.currentUser()).length > 0);
};

SessionStore.__onDispatch = function(payload){
  switch(payload.actionType) {
  case SessionConstants.LOGIN:
    _login(payload.currentUser);
    this.__emitChange();
    break;
  case UserConstants.USER_IMAGE_RECEIVED:
    _updateImage(payload.user.image_url);
    this.__emitChange();
    break;
  case SessionConstants.LOGOUT:
    _logout();
    this.__emitChange();
    break;
  }
};

module.exports = SessionStore;
