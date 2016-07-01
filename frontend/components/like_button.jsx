const React = require("react");
const Button = require('react-bootstrap').Button;
const LikeActions = require('../actions/like_actions');
const SessionStore = require('../stores/session_store');

var LikeButton = React.createClass({
  getInitialState(){
    return{
      likers: this.props.likers,
      current_id: SessionStore.currentUser().id,
      styling: "default"
    };
  },
  componentDidMount(){
    this.setState({current_id: SessionStore.currentUser().id});
  },
  buttonText(){
    let text = "like";
    if (this.props.likers.includes(this.state.current_id)) {
      text = "unlike";
    }
    return text;
  },
  styling(){
    let style = "glyphicon glyphicon-heart-empty like-button";
    if (this.props.likers.includes(this.state.current_id)) {
      style = "glyphicon glyphicon-heart like-button";
    }
    return style;
  },
  likeNumber(){
    if (this.props.likers.length === 1) {
      return <div>1 like</div>;
    } else if (this.props.likers.length > 1) {
      return <div>{this.props.likers.length} likes</div>;
    }
  },
  toggleLike(){
    if (this.props.likers.includes(this.state.current_id)) {
      LikeActions.destroyLike(this.props.recipeId);
    } else {
      LikeActions.addLike(this.props.recipeId);
    }
  },
  render: function () {
    return (
        <div className="flex-start">
          <div className={this.styling()}
                  onClick={this.toggleLike}>
          </div>
          {this.likeNumber()}
        </div>
    );
  }
});

module.exports = LikeButton;
