const React = require('react');
const SessionStore = require('../stores/session_store');
const SessionActions = require('../actions/session_actions');
const Modal = require('react-modal');
const LoginForm = require('./login_form');
const FormStyle = require('../styles/form_style');
const FormActions = require('../actions/form_actions');
const App = React.createClass({
  getInitialState(){
    return {
      currentUser: SessionStore.currentUser(),
      modalOpen: false
    };
  },
  componentDidMount(){
    SessionStore.addListener(this._updateUser);
  },
  _updateUser(){
    this.setState({
      currentUser: SessionStore.currentUser()
    });
    if (SessionStore.isUserLoggedIn()) {
      this.setState({modalOpen: false});
    }
  },
  userDisplay(){
    let user = this.state.currentUser.username;
    if (user !== undefined) {
      return(
        <div>
          <div>{user}</div>
          <button onClick={SessionActions.logout}>logout</button>
        </div>
      );
    } else {
      return(
        <div>
          <button onClick={this._handleLogInClick}>Log In</button>
          <button onClick={this._handleSignUpClick}>Sign Up</button>
        </div>
      );
    }
  },

  attractBox(){
    if(this.state.currentUser.username === undefined) {
      return(
        <div>
          big box
        </div>
      );
    }
  },

  _handleLogInClick(){
    FormActions.setAction("login");
    this.setState({ modalOpen: true});
  },
  _handleSignUpClick(){
    FormActions.setAction("signup");
    this.setState({ modalOpen: true});
  },
  _handleClose(){
    this.setState({ modalOpen: false });
  },
  render() {
    return(
      <div>

        <form className="navbar-form navbar-left" role="search">
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Search" />
          </div>
          <button type="submit" className="btn btn-default">Submit</button>
        </form>
        <header><h1>Foodium</h1>
        {this.userDisplay()}
        </header>
        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this._handleClose}
          style={FormStyle}>
          <LoginForm />
        </Modal>
        {this.attractBox()}
        {this.props.children}
      </div>
    );
  }
});

// getChildContext() {
//   return {router: hashHistory};
// },

App.childContextTypes = {
  router: React.PropTypes.object
};

module.exports = App;
