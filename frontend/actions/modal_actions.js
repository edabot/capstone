const AppDispatcher = require('../dispatcher/dispatcher');

const ModalActions = {
  setAction(modalAction) {
    AppDispatcher.dispatch({
      actionType: "MODAL_ACTION",
      modalAction: modalAction
    });
  },
};

module.exports = ModalActions;
