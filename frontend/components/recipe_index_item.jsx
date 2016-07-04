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

  _authorImage(){
    if (this.props.recipe.author.image_url === "" ||
        this.props.recipe.author.image_url === null) {
      return(
        <div className="author-big-letter">
          {this.props.recipe.author.username[0]}
        </div>
      );
    } else {
      return(
        <div className="author-thumbnail">
          hey
          <img src={this.props.recipe.author.image_url} />
        </div>
      );
    }
  },
  _commentDisplay(){
    if (this.props.recipe.comment_count === 1) {
      return <div>1 comment</div>;
    } else if (this.props.recipe.comment_count > 1) {
      return <div>{this.props.recipe.comment_count} comments</div>;
    }
  },
  render(){
    return(
      <div className="recipe-index-item">
        <div className="flex-start">
          {this._authorImage()}
          <div className="author-name">
            {this.props.recipe.author.username}
          </div>
        </div>
        {this.props.recipe.tags.map(tag => {
          return <div key={tag}>{tag}</div>;
        })}
        <div>
          <img onClick={this._viewRecipe}
               className="img-responsive pointer"
               src={this.state.recipe.image_url} />
          <div className="recipe-body">
            <div onClick={this._viewRecipe}
                 className="recipe-title pointer">
              {this.state.recipe.title}
            </div>
            <blockquote>
              <h3>{this.state.recipe.description}</h3>
            </blockquote>
          </div>
        </div>
        <div className="flex-between">
          <div className="index-likes">
          <LikeButton recipeId={this.props.recipe.id}
                      likers={this.props.recipe.likers} />
          </div>
          <div className="index-comments">
            {this._commentDisplay()}
          </div>
        </div>
      </div>
    );
  }
});

module.exports = RecipeIndexItem;
