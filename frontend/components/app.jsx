const React = require('react');
const SessionStore = require('../stores/session_store');
const SessionActions = require('../actions/session_actions');
const Modal = require('react-modal');
const LoginForm = require('./login_form');

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
  },
  username(){
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
        <div>hey</div>
      );
    }
  },
  _handleClick(){
    this.setState({ modalOpen: true });
  },
  render() {
    return(
      <div>
        <header><h1>Foodium</h1>
        {this.username()}
        </header>
        <button onClick={this._handleClick}>Sign In</button>
        <Modal
          isOpen={this.state.modalOpen}>
          <LoginForm />
        </Modal>
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
