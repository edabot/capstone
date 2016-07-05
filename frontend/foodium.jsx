const React = require('react');
const ReactDOM = require('react-dom');
const ReactRouter = require('react-router');
const Route = ReactRouter.Route;
const Router = ReactRouter.Router;
const IndexRoute = ReactRouter.IndexRoute;
const hashHistory = ReactRouter.hashHistory;
const SetupApp = require('./setup_app');
const Modal = require('react-modal');

const App = require('./components/app');
const Recipe = require('./components/recipe');
const RecipeIndex = require('./components/recipe_index');
const Author = require('./components/author');
const RecipeForm = require('./components/recipe_form');
const Edit = require('./components/edit_form');
const TagIndex = require('./components/tag_index');
const TagActions = require('./actions/tag_actions');
const SidebarStore = require('./stores/sidebar_store');

const routes=(
  <Route path='/' component={App}>
    <IndexRoute component={RecipeIndex} />
    <Route path="recipes/new" component={RecipeForm} />
    <Route path="recipes/:recipeId" component={Recipe} />
    <Route path="recipes/:recipeId/edit" component={Edit} />
    <Route path="author/:userId" component={Author} />
    <Route path="tags/:tagName" component={TagIndex} />
  </Route>
);

window.TagActions = TagActions;
window.SidebarStore = SidebarStore;

document.addEventListener("DOMContentLoaded", () => {
  Modal.setAppElement(document.body);
  SetupApp();
  ReactDOM.render(
    <Router history={hashHistory}>{routes}</Router>,
    document.getElementById("content"));
});
