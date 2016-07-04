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
    return{recipe: {tags:[], comments:[]},
           id: parseInt(this.props.params.recipeId),
           editButton: false,
           commentForm: SessionStore.isUserLoggedIn() };
  },
  componentDidMount(){
    this.storeListener = RecipeStore.addListener(this._updateRecipe);
    this.sessionStoreListener = SessionStore.addListener(this._updateUser);
    RecipeActions.getRecipe(this.state.id);
  },
  _updateRecipe(){
    this.setState({recipe: RecipeStore.getRecipe(this.state.id)});
    if (this.state.recipe.user_id === SessionStore.currentUser().id) {
      this.setState({editButton: true});
    } else {
      this.setState({editButton: false});
    }
  },
  _updateUser(){
    if (this.state.recipe.user_id === SessionStore.currentUser().id) {
      this.setState({editButton: true});
    } else {
      this.setState({editButton: false});
    }
    this.setState({commentForm: SessionStore.isUserLoggedIn()});
  },
  componentWillUnmount(){
    this.storeListener.remove();
    this.sessionStoreListener.remove();
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
  commentForm(){
    if (this.state.commentForm) {
      return <CommentForm recipeId={this.props.params.recipeId}/>;
    } else {
      return <div>signup or login to comment</div>;
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
    if (this.state.recipe.comments.length > 0) {
      return this.state.recipe.comments.map(comment => {
        return <Comment key={comment.id} comment={comment}/>;
      });
    } else {
      return <div>No comments yet</div>;
    }
  },
  render(){
    return(
      <div className="recipe">

        <img className="img-responsive" src={this.state.recipe.image_url} />

        {this.editButton()}

        {this.state.recipe.tags.map(tag => {
          return <div>{tag}</div>;
        })}

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

          {this.comments()}
          {this.commentForm()}
          </div>
        </div>

      </div>
    );
  }
});
window.RecipeStore = RecipeStore;
window.SessionStore = SessionStore;
module.exports = Recipe;
