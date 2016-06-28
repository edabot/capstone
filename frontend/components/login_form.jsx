const React = require('react');
const SessionActions = require('../actions/session_actions');
const SessionStore = require('../stores/session_store');
const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;

const LoginForm = React.createClass({
  getInitialState(){
    return({
      username: "",
      password: "",
      action: "login"
    });
  },

  componentDidMount(){
    SessionStore.addListener(this.checkIfLoggedIn);
  },

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
  render(){
    return(
      <div>
        <form>
          <label>Username:
          <input id="user[username]"
            onChange={this._handleUsernameChange}
            value={this.state.username} /></label>
          <br />

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
