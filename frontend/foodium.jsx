const React = require('react');
const ReactDOM = require('react-dom');
const ReactRouter = require('react-router');
const Route = ReactRouter.Route;
const Router = ReactRouter.Router;
const IndexRoute = ReactRouter.IndexRoute;
const hashHistory = ReactRouter.hashHistory;
const SetupApp = require('./setup_app');
const Modal = require('react-modal');
// const Bootstrap = require('bootstrap');

const LoginForm = require('./components/login_form');
const App = require('./components/app');
const RecipeIndex = require('./components/recipe_index');
const RecipeIndexItem = require('./components/recipe_index_item');
const Author = require('./components/author');

const RecipeApiUtil = require('./util/recipe_api_util');
const RecipeActions = require('./actions/recipe_actions');
const RecipeStore = require('./stores/recipe_store');

const routes=(
  <Route path='/' component={App}>
    <IndexRoute component={RecipeIndex} />
    <Route path="recipes/:recipeId" component={RecipeIndexItem} />
    <Route path="author/:userId" component={Author} />
  </Route>
);

window.RecipeApiUtil = RecipeApiUtil;
window.RecipeActions = RecipeActions;
window.RecipeStore = RecipeStore;

document.addEventListener("DOMContentLoaded", () => {
  Modal.setAppElement(document.body);
  SetupApp();
  ReactDOM.render(
    <Router history={hashHistory}>{routes}</Router>,
    document.getElementById("content"));
});


let r = {description: "Small and wonderful", ingredients: "1 cup butter, softened 1 cup white sugar 1 cup packed brown sugar 2 eggs 2 teaspoons vanilla extract 3 cups all-purpose flour 1 teaspoon baking soda 2 teaspoons hot water 1/2 teaspoon salt 2 cups semisweet chocolate chips 1 cup chopped walnuts", instructions: "Preheat oven to 350 degrees F (175 degrees C).↵Cream together the butter, white sugar, and brown sugar until smooth. Beat in the eggs one at a time, then stir in the vanilla. Dissolve baking soda in hot water. Add to batter along with salt. Stir in flour, chocolate chips, and nuts. Drop by large spoonfuls onto ungreased pans.↵Bake for about 10 minutes in the preheated oven, or until edges are nicely browned.", title: "Strawberry Cake", user_id: 1}
