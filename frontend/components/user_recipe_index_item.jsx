const React = require('react');
const RecipeStore = require('../stores/recipe_store');
const RecipeActions = require('../actions/recipe_actions');
const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;
const LikeButton = require('./like_button');

const RecipeIndexItem = React.createClass({
  getInitialState(){
    return{recipe: this.props.recipe};
  },

  _viewRecipe(){
    hashHistory.push('/recipes/' + this.props.recipe.id);
  },

  render(){
    return(
      <div className="recipe-index-item">
        <div>
          <img onClick={this._viewRecipe}
               className="img-responsive pointer"
               src={this.state.recipe.image_url.replace("upload", "upload/c_scale,w_600").replace("png", "jpg")} />
          <div className="recipe-body">
            <div onClick={this._viewRecipe}
                 className="recipe-title pointer">
              {this.state.recipe.title}
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = RecipeIndexItem;
