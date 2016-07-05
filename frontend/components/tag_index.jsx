const React = require('react');
const RecipeStore = require('../stores/recipe_store');
const TagActions = require('../actions/tag_actions');
const RecipeIndexItem = require('./recipe_index_item');

const RecipeIndex = React.createClass({
  getInitialState(){
    return ({recipes: [],
             tagName: this.props.params.tagName});
  },
  componentDidMount(){
    this.storeListener = RecipeStore.addListener(this.getTagRecipes);
    TagActions.getRecipes(this.props.params.tagName);
  },
  getTagRecipes(){
    this.setState({recipes: RecipeStore.getTagRecipes(this.state.tagName)});
  },
  componentWillReceiveProps: function(nextProps) {
    this.setState({tagName: nextProps.params.tagName});
    TagActions.getRecipes(nextProps.params.tagName);
  },
  componentWillUnmount(){
    this.storeListener.remove();
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
