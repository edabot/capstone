const React = require('react');
const RecipeStore = require('../stores/recipe_store');
const TagActions = require('../actions/tag_actions');
const RecipeIndexItem = require('./recipe_index_item');

const RecipeIndex = React.createClass({
  getInitialState(){
    return ({recipes: []});
  },
  componentDidMount(){
    this.storeListener = RecipeStore.addListener(this.getTagRecipes);
    TagActions.getRecipes(this.props.params.tagName);
  },
  getTagRecipes(){
    this.setState({recipes: RecipeStore.getTagRecipes(this.props.params.tagName)});
  },
  render(){
    return(
      <div className="tag-index">
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
