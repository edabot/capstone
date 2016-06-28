const SessionActions = require('./actions/session_actions');

module.exports = function(){
  let user = window.Foodium.user;
  if (typeof user !== undefined) { SessionActions.receiveCurrentUser(user); }
};
