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
  switch(payload.actionType) {
  case TagConstants.RECEIVED_SIDEBAR:
    setSidebar(payload.sidebar);
    SidebarStore.__emitChange();
    break;
  }
};

module.exports = SidebarStore;
