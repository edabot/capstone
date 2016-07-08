const React = require('react');
const SessionActions = require('../actions/session_actions');
const SessionStore = require('../stores/session_store');
const ReactRouter = require('react-router');
const ErrorStore = require('../stores/error_store');
const hashHistory = ReactRouter.hashHistory;
const FormStore = require('../stores/form_store');
const FormGroup = require('react-bootstrap').FormGroup;
const ControlLabel = require('react-bootstrap').ControlLabel;
const FormControl = require('react-bootstrap').FormControl;
const HelpBlock = require('react-bootstrap').HelpBlock;
const Button = require('react-bootstrap').Button;

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
      if (field === "base") return <div className="error-message">Invalid username or password</div>;
      if (field === "password") return <div className="error-message">Password is too short</div>;
      return <div className="error-message">{field} { errorMsg }</div>;
    });
    return messages;
  },

  getValidationState() {
    const length = this.state.password.length;
    if (length > 5) return 'success';
  },
  toggleAction(){
    if (this.state.action === "login") {
      this.setState({action: 'signup'});
    } else {
      this.setState({action: "login"});
    }
  },
  toggleButton(){
    if (this.state.action === "login") {
      return <Button bsStyle="link" onClick={this.toggleAction} block>sign up instead</Button>;
    } else {
      return <Button bsStyle="link" onClick={this.toggleAction} block>login instead</Button>;
    }
  },

  newPasswordInfo(){
    if (this.state.action === "signup") {
      return (
        <div>
          <FormControl.Feedback />
          <HelpBlock>minimum 6 characters</HelpBlock>
        </div>
      );
    }
  },

  render(){
    return(
      <div>
        <form>

          {/*<h2>{this.state.action}</h2>*/}
          <div className="login-logo">
          <img src="http://res.cloudinary.com/de7jh2mw5/image/upload/c_scale,h_60,q_auto:best/v1468016512/Screen_Shot_2016-07-08_at_3.21.33_PM_amhk0p.jpg" />
          <h2>Foodium</h2>
          </div>
          <FormGroup controlId="formBasicText" >

            <ControlLabel>Username:</ControlLabel>
            <FormControl
              type="text"
              value={this.state.username}
              placeholder="Enter username"
              onChange={this._handleUsernameChange}
            />
            { this.fieldErrors("base") }
            { this.fieldErrors("username") }
          </FormGroup>

          <FormGroup controlId="formBasicText"
                     validationState={this.getValidationState()} >

          <ControlLabel>Password:</ControlLabel>
            <FormControl
              type="password"
              value={this.state.password}
              placeholder="Enter password"
              onChange={this._handlePasswordChange}
            />
          { this.fieldErrors("password") }
          {this.newPasswordInfo()}
          </FormGroup>
          <br />

          </form>

          <Button bsStyle="success" onClick={this._handleSubmit} block>{this.state.action}</Button>
          <Button onClick={this._guestLogin} block>Guest Login</Button>
          {this.toggleButton()}

      </div>
    );
  }
});

module.exports = LoginForm;
