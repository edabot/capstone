const React = require('react');
const SessionActions = require('../actions/session_actions');
const SessionStore = require('../stores/session_store');
const ReactRouter = require('react-router');
const ErrorStore = require('../stores/error_store');
const hashHistory = ReactRouter.hashHistory;
const FormStore = require('../stores/form_store');

const LoginForm = React.createClass({
  getInitialState(){
    return({
      username: "",
      password: "",
      action: FormStore.getAction(),
      errors: []
    });
  },

  componentDidMount(){
    this.sessionListener = SessionStore.addListener(this.checkIfLoggedIn);
    this.errorListener = ErrorStore.addListener(this.forceUpdate.bind(this));
    this.formListener = FormStore.addListener(this.updateAction);
  },

  updateAction(){
    this.setState({action: FormStore.getAction()});
  },

  componentWillUnmount() {
    this.errorListener.remove();
    this.sessionListener.remove();
    this.formListener.remove();
  },
  // updateErrors(){
  //   debugger
  //   this.setState({errors: ErrorStore.formErrors()});
  // },

  checkIfLoggedIn(){
    if (SessionStore.isUserLoggedIn()) {
      hashHistory.push("/");
    }
  },

  _handleSubmit(){
    if (this.state.action === "login") {
      SessionActions.login({
        username: this.state.username,
        password: this.state.password
      });
    } else {
      SessionActions.signup({
        username: this.state.username,
        password: this.state.password
      });
    }
  },

  _handleUsernameChange(e){
    this.setState({username: e.target.value});
  },

  _handlePasswordChange(e){
    this.setState({password: e.target.value});
  },

  _guestLogin(){
    SessionActions.login({
      username: "guest",
      password: "guestguest"
    });
  },

  fieldErrors(field) {
    const errors = ErrorStore.formErrors(ErrorStore.form());
    if (!errors[field]) { return; }
    const messages = errors[field].map( (errorMsg, i) => {
      return <li key={ i }>{field} { errorMsg }</li>;
    });
    return <ul>{ messages }</ul>;
  },

  render(){
    return(
      <div>
        <form>
          <h2>{this.state.action}</h2>

          <fieldset class="form-group">
            { this.fieldErrors("base") }
            { this.fieldErrors("username") }

            <label>Username:
            <input id="user[username]"
              className="form-control"
              onChange={this._handleUsernameChange}
              value={this.state.username} /></label>
          </fieldset>

          <fieldset class="form-group">

          { this.fieldErrors("password") }
          <label>Password:
            <input id="user[password]"
              className="form-control"
              onChange={this._handlePasswordChange}
            value={this.state.password} type="password" /></label>
          </fieldset>

          <br />

          </form>


          <button className="btn btn-block btn-success" onClick={this._handleSubmit}>{this.state.action}</button>
          <button className="btn btn-block btn-default" onClick={this._guestLogin}>Guest Login</button>


      </div>
    );
  }
});

module.exports = LoginForm;
