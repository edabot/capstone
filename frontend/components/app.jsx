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
    this.sessionStore = SessionStore.addListener(this._updateUser);
    this.modalStore = ModalStore.addListener(this._updateModal);
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
  componentWillUnmount(){
    this.sessionStore.remove();
    this.modalStore.remove();
  },

bigBox(){
    if(this.state.currentUser.username === undefined &&
       this.props.location.pathname === "/") {
      return(
        <BigBox signup={this._handleSignUpClick}/>
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
          {this.bigBox()}
        <div className="content">
          {this.props.children}
        </div>
      </div>
    );
  }
});


module.exports = App;
