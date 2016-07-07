const Store = require('flux/utils').Store;
const Dispatcher = require('../dispatcher/dispatcher');
const UserConstants = require('../constants/user_constants');
const FollowConstants = require('../constants/follow_constants');

const UserStore = new Store(Dispatcher);

let _user = {};

UserStore.getUser = function() {
  return Object.assign({}, _user);
};

const setUser = function(user) {
  _user = user;
};

const _updateImage = function(imageUrl) {
  _user.image_url = imageUrl;
};

const addFollow = function(followerId){
  _user.followers.push(parseInt(followerId));
};

const removeFollow = function(followerId){
  let idx = _user.followers.indexOf(parseInt(followerId));
  _user.followers.splice(idx, 1);
};

UserStore.__onDispatch = function(payload){
  switch(payload.actionType) {
  case UserConstants.USER_RECEIVED:
    setUser(payload.user);
    UserStore.__emitChange();
    break;
  case UserConstants.USER_IMAGE_RECEIVED:
    _updateImage(payload.user.image_url);
    UserStore.__emitChange();
    break;
  case FollowConstants.ADDED_FOLLOW:
    addFollow(payload.follow.follower_id);
    UserStore.__emitChange();
    break;
  case FollowConstants.REMOVED_FOLLOW:
    removeFollow(payload.follow.follower_id);
    UserStore.__emitChange();
    break;
  }
};

module.exports = UserStore;
