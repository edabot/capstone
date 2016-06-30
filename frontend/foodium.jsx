const React = require('react');
const ReactDOM = require('react-dom');
const ReactRouter = require('react-router');
const Route = ReactRouter.Route;
const Router = ReactRouter.Router;
const IndexRoute = ReactRouter.IndexRoute;
const hashHistory = ReactRouter.hashHistory;
const SetupApp = require('./setup_app');
const Modal = require('react-modal');
const Bootstrap = require('bootstrap');

const LoginForm = require('./components/login_form');
const App = require('./components/app');
const Index = require('./components/index');
const Recipe = require('./components/recipe');
const Author = require('./components/author');

const RecipeApiUtil = require('./util/recipe_api_util');

const routes=(
  <Route path='/' component={App}>
    <IndexRoute component={Index} />
    <Route path="recipe/:recipeId" component={Recipe} />
    <Route path="author/:userId" component={Author} />
  </Route>
);

window.RecipeApiUtil = RecipeApiUtil;

document.addEventListener("DOMContentLoaded", () => {
  Modal.setAppElement(document.body);
  SetupApp();
  ReactDOM.render(
    <Router history={hashHistory}>{routes}</Router>,
    document.getElementById("content"));
});
