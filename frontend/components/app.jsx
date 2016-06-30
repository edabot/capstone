const React = require('react');
const SessionStore = require('../stores/session_store');
const SessionActions = require('../actions/session_actions');
const Modal = require('react-modal');
const FormStyle = require('../styles/form_style');
const FormActions = require('../actions/form_actions');
const ModalStore = require('../stores/modal_store');

const NavBar = require('./navbar');
const LoginForm = require('./login_form');
const BigBox = require('./big_box');

const App = React.createClass({
  getInitialState(){
    return {
      currentUser: SessionStore.currentUser(),
      modalOpen: false
    };
  },
  componentDidMount(){
    SessionStore.addListener(this._updateUser);
    ModalStore.addListener(this._updateModal);
  },
  _updateModal(){
    this.setState({
      modalOpen: ModalStore.getVisible()
    });
  },
  _updateUser(){
    this.setState({
      currentUser: SessionStore.currentUser()
    });
    if (SessionStore.isUserLoggedIn()) {
      this.setState({modalOpen: false});
    }
  },

  attractBox(){
    if(this.state.currentUser.username === undefined) {
      return(
        <BigBox />
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
        <NavBar login={this._handleLogInClick}
        signup={this._handleSignUpClick}
        logout={SessionActions.logout}/>

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


module.exports = App;
