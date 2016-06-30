const React = require('react');
const RecipeStore = require('../stores/recipe_store');
const RecipeActions = require('../actions/recipe_actions');

const Recipe = React.createClass({
  getInitialState(){
    return{recipe: {}, id: parseInt(this.props.params.recipeId)};
  },
  componentDidMount(){
    this.storeListener = RecipeStore.addListener(this._updateRecipe);
    RecipeActions.getRecipe(this.state.id);
  },
  _updateRecipe(){
    console.log("updateRecipe");
    this.setState({recipe: RecipeStore.getRecipe(this.state.id)});
  },
  render(){
    return(
      <div className="recipe">
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

module.exports = Recipe;
