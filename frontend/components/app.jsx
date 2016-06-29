const React = require('react');
const SessionStore = require('../stores/session_store');
const SessionActions = require('../actions/session_actions');
const Modal = require('react-modal');
const LoginForm = require('./login_form');
const FormStyle = require('../styles/form_style');
const FormActions = require('../actions/form_actions');
const ModalStore = require('../stores/modal_store');
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

  navUserSection(){
    let user = this.state.currentUser.username;
    if (user !== undefined) {
      return(
        <div>
        {user}
        <button onClick={SessionActions.logout} className="btn btn-default" >logout</button>
        </div>
      );
    } else {
      return(
        <div>
        <button className="btn btn-default" onClick={this._handleLogInClick}>Log In</button>
        <button className="btn btn-default"onClick={this._handleSignUpClick}>Sign Up</button>
        </div>
      );
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

        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#">Foodium</a>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <form className="navbar-form navbar-left" role="search">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Search" />
                </div>
                <button type="submit" className="btn btn-default">Submit</button>
              </form>
              <div className="nav navbar-nav navbar-right">
                {this.navUserSection()}
              </div>
            </div>
          </div>
        </nav>

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
