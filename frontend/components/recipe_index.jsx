const React = require('react');
const RecipeStore = require('../stores/recipe_store');
const RecipeActions = require('../actions/recipe_actions');
const RecipeIndexItem = require('./recipe_index_item');

const RecipeIndex = React.createClass({
  getInitialState(){
    return {recipes: [] };
  },
  componentDidMount(){
    this.storeListener = RecipeStore.addListener(this._updateRecipes);
    RecipeActions.getRecipeIndex();
  },
  _updateRecipes(){
    this.setState({recipes: RecipeStore.getRecipes()});
  },
  componentWillUnmount(){
    this.storeListener.remove();
  },
  render(){
    return(
      <div className="recipe-index">
        {
          this.state.recipes.map( recipe => {
            return (
              <RecipeIndexItem key={recipe.id} recipe={recipe} />
            );
          })
        }
      </div>
    );
  }
});

module.exports = RecipeIndex;
