const React = require('react');
const SessionActions = require('../actions/session_actions');
const SessionStore = require('../stores/session_store');
const ReactRouter = require('react-router');
const ErrorStore = require('../stores/error_store');
const hashHistory = ReactRouter.hashHistory;

const LoginForm = React.createClass({
  getInitialState(){
    return({
      username: "",
      password: "",
      action: "login",
      errors: []
    });
  },

  componentDidMount(){
    SessionStore.addListener(this.checkIfLoggedIn);
    ErrorStore.addListener(this.forceUpdate.bind(this));
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
  _handleChange(e){
    if (this.state.action === "login") {
      this.setState({action: "signup"});
    } else {
      this.setState({action: "login"});
    }
    console.log(this.state.action);
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
          { this.fieldErrors("base") }
          { this.fieldErrors("username") }

          <label>Username:
          <input id="user[username]"
            onChange={this._handleUsernameChange}
            value={this.state.username} /></label>
          <br />

          { this.fieldErrors("password") }
          <label>Password:
          <input id="user[password]"
            onChange={this._handlePasswordChange}
            value={this.state.password} type="password" /></label>
          <br />
          <select onChange={this._handleChange}>
            <option value="login">Login</option>
            <option value="signup">Signup</option>
          </select>
          <br />
          <button onClick={this._handleSubmit}>{this.state.action}</button>

        </form>

      </div>
    );
  }
});

module.exports = LoginForm;
