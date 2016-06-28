const React = require('react');
const ReactDOM = require('react-dom');
const ReactRouter = require('react-router');
const Route = ReactRouter.Route;
const Router = ReactRouter.Router;
const IndexRoute = ReactRouter.IndexRoute;
const hashHistory = ReactRouter.hashHistory;

const SessionApiUtil = require('./util/session_api_util.js');

const App = React.createClass({
  getChildContext() {
    return {router: hashHistory};
  },

  render() {
    return(
      <div>
        <header><h1>Foodium</h1></header>
        {this.props.children}
      </div>
    );
  }
});

App.childContextTypes = {
  router: React.PropTypes.object
};

const routes=(
  <Route path='/' component={App}>
  </Route>
);

window.SessionApiUtil = SessionApiUtil;

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <Router history={hashHistory}>{routes}</Router>,
    document.getElementById("content"));
});
