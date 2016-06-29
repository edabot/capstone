const React = require('react');
const FormActions = require('../actions/form_actions');
const ModalActions = require('../actions/modal_actions');

const BigBox = React.createClass({
  _handleClick(){
    FormActions.setAction("signup");
    ModalActions.setAction(true);
  },
  render(){
    return(
      <div className="jumbotron">
        <div className="promo-box">
          <h1 className="promo-title">Move thinking forward.</h1>
          <h2 className="promo-subtitle">Medium is a community of readers
            and writers offering unique perspectives on ideas large and
            small.</h2>
          <h3 className="promo-text">Sign up to read and interact
            with what matters most to you.</h3>
          <p><button onClick={this._handleClick}
                     className="btn btn-primary btn-lg"
                     role="button">get started</button></p>
        </div>
      </div>
    );
  }
});

module.exports = BigBox;
