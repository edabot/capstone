const React = require('react');
const SessionStore = require('../stores/session_store');
const SessionActions = require('../actions/session_actions');

const App = React.createClass({
  getInitialState(){
    return {
      currentUser: SessionStore.currentUser()
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
  render() {
    return(
      <div>
        <header><h1>Foodium</h1>
        {this.username()}
        </header>
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
