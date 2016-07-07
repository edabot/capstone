const React = require('react');
const RecipeStore = require('../stores/recipe_store');
const RecipeActions = require('../actions/recipe_actions');
const SessionStore = require('../stores/session_store');
const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;
const Comment = require('./comment');
const CommentForm = require('./comment_form');
const TagButton = require('./tag_button');

const Recipe = React.createClass({
  getInitialState(){
    return{recipe: {tags:[], comments:[], image_url: ""},
           id: parseInt(this.props.params.recipeId),
           editButton: false,
           commentForm: SessionStore.isUserLoggedIn(),
           };
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
  componentWillReceiveProps: function(nextProps) {
    this.setState({id: nextProps.params.recipeId});
    RecipeActions.getRecipe(nextProps.params.recipeId);
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
    if (this.state.recipe.comments === undefined) {
      return <div>No comments yet</div>;
    } else if (this.state.recipe.comments.length === 0) {
      return <div>No comments yet</div>;
    } {
      return this.state.recipe.comments.map(comment => {
        return <Comment key={comment.id} comment={comment}/>;
      });
    }
  },
  imageUrl(){
    if (this.state.recipe.image_url) {
      return this.state.recipe.image_url.replace("png", "jpg");
    }
  },
  tags(){
    if (this.state.recipe.tags) {
      return this.state.recipe.tags.map(tag => {
        return <TagButton key={tag} tag={tag}/>;
      });
    }
  },
  render(){
    return(
      <div className="recipe">
        <div className="recipe-body">
          <img className="img-responsive" src={this.imageUrl()} />
          {this.editButton()}
          <div className="flex-between">
            <div className="recipe-title">
              {this.state.recipe.title}
            </div>
            <div className="flex-end">
              {this.tags()}
            </div>
          </div>

          <blockquote>
            <h3>{this.state.recipe.description}</h3>
          </blockquote>

          <div className="recipe-preheat">
          </div>

          <div className="recipe-instructions" dangerouslySetInnerHTML={{__html: this.state.recipe.instructions}}>
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

module.exports = Recipe;
