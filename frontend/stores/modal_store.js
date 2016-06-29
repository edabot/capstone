const Store = require('flux/utils').Store;
const AppDispatcher = require('../dispatcher/dispatcher');

const ModalStore = new Store(AppDispatcher);

let _visible = false;

function setVisible(modalAction){
  _visible = modalAction;
  ModalStore.__emitChange();
}

ModalStore.getVisible = function(){
  return _visible;
};

ModalStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case "MODAL_ACTION":
      setVisible(payload.modalAction);
      break;
  }
};

module.exports = ModalStore;
