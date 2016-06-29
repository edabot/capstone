const AppDispatcher = require('../dispatcher/dispatcher');

const FormActions = {
  setAction(formAction) {
    AppDispatcher.dispatch({
      actionType: "FORM_ACTION",
      formAction: formAction
    });
  },
};

module.exports = FormActions;
