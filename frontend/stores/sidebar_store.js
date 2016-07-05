const Store = require('flux/utils').Store;
const Dispatcher = require('../dispatcher/dispatcher');
const TagConstants = require('../constants/tag_constants');

const SidebarStore = new Store(Dispatcher);

let _sidebar = {};

SidebarStore.getSidebar = function() {
  return _sidebar.tags;
};

const setSidebar = function(sidebar) {
  _sidebar = sidebar;
};

SidebarStore.__onDispatch = function(payload){
  console.log(payload.actionType);
  switch(payload.actionType) {
  case TagConstants.RECEIVED_SIDEBAR:
    console.log("store received sidebar");

    setSidebar(payload.sidebar);
    SidebarStore.__emitChange();
    break;
  }
};

module.exports = SidebarStore;
