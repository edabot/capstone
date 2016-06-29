const Store = require('flux/utils').Store;
const AppDispatcher = require('../dispatcher/dispatcher');

const FormStore = new Store(AppDispatcher);

let _action = "login";

function setAction(formAction){
  _action = formAction;
  FormStore.__emitChange();
}

FormStore.getAction = function(){
  return _action;
};

FormStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case "FORM_ACTION":
      setAction(payload.formAction);
      break;
  }
};

module.exports = FormStore;
