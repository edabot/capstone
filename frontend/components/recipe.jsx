const React = require('react');
const RecipeStore = require('../stores/recipe_store');
const RecipeActions = require('../actions/recipe_actions');
const SessionStore = require('../stores/session_store');
const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;

const Recipe = React.createClass({
  getInitialState(){
    return{recipe: {},
           id: parseInt(this.props.params.recipeId),
           editButton: false};
  },
  componentDidMount(){
    this.storeListener = RecipeStore.addListener(this._updateRecipe);
    RecipeActions.getRecipe(this.state.id);
  },
  _updateRecipe(){
    this.setState({recipe: RecipeStore.getRecipe(this.state.id)});
    if (this.state.recipe.user_id === SessionStore.currentUser().id) {
      this.setState({editButton: true});
    }
  },
  componentWillUnmount(){
    this.storeListener.remove();
  },
  editButton(){
    if (this.state.editButton) {
      return <button onClick={this._handleEditClick}>edit</button>;
    }
  },
  _handleEditClick(){
    hashHistory.push('/recipes/' + this.state.id + '/edit');
  },
  render(){
    return(
      <div className="recipe">
        {this.editButton()}

        <img className="img-responsive" src={this.state.recipe.image_url} />

        <div className="recipe-body">
          <div className="recipe-title">
            {this.state.recipe.title}
          </div>
          <blockquote>
            <h3>{this.state.recipe.description}</h3>
          </blockquote>
          <div className="recipe-preheat">

          </div>
          <p className="recipe-section">Ingredients</p>
          <div className="recipe-ingredients">
            {this.state.recipe.ingredients}
          </div>
          <p className="recipe-section">Instructions</p>
          <div className="recipe-instructions">
            {this.state.recipe.instructions}
          </div>
        </div>
      </div>
    );
  }
});
window.RecipeStore = RecipeStore;
window.SessionStore = SessionStore;
module.exports = Recipe;
