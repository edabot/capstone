const React = require('react');
const RecipeStore = require('../stores/recipe_store');
const RecipeActions = require('../actions/recipe_actions');
const SessionStore = require('../stores/session_store');
const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;
const Comment = require('./comment');
const CommentForm = require('./comment_form');

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
      return (
        <div className="edit-btn-grp">
          <button className="btn btn-danger edit-btn"
            onClick={this._handleDeleteClick}>delete</button>
          <button className="btn btn-default edit-btn"
                  onClick={this._handleEditClick}>edit</button>
        </div>
      );
    }
  },
  _handleEditClick(){
    hashHistory.push('/recipes/' + this.state.id + '/edit');
  },
  _handleDeleteClick(){
    RecipeActions.deleteRecipe(this.props.params.recipeId);
    hashHistory.push('/');
  },
  comments(){
    if (this.state.recipe.comments) {
      return this.state.recipe.comments;
    } else {
      return [];
    }
  },
  render(){
    return(
      <div className="recipe">

        <img className="img-responsive" src={this.state.recipe.image_url} />

        {this.editButton()}
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
          <div className="recipe-comments">
          <p className="recipe-section">Comments</p>

          {
            this.comments().map(comment => {
              return <Comment key={comment.id} comment={comment}/>;
            })
          }
          <CommentForm recipeId={this.props.params.recipeId}/>
          </div>
        </div>

      </div>
    );
  }
});
window.RecipeStore = RecipeStore;
window.SessionStore = SessionStore;
module.exports = Recipe;
