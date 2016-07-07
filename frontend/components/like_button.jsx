const React = require("react");
const Button = require('react-bootstrap').Button;
const LikeActions = require('../actions/like_actions');
const SessionStore = require('../stores/session_store');
const OverlayTrigger = require('react-bootstrap').OverlayTrigger;
const Popover = require('react-bootstrap').Popover;

var LikeButton = React.createClass({
  getInitialState(){
    return{
      likers: this.props.likers,
      currentId: SessionStore.currentUser().id,
      styling: "default"
    };
  },
  componentDidMount(){
    this.storeListener = SessionStore.addListener(this.currentUser);
  },
  componentWillUnmount(){
    this.storeListener.remove();
  },
  currentUser(){
    this.setState({currentId: SessionStore.currentUser().id});
  },
  buttonText(){
    let text = "like";
    if (this.props.likers.includes(this.state.currentId)) {
      text = "unlike";
    }
    return text;
  },
  styling(){
    let style = "glyphicon glyphicon-heart-empty like-button pointer";
    if (this.props.likers.includes(this.state.currentId)) {
      style = "glyphicon glyphicon-heart like-button pulse pointer";
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
    if (this.props.likers.includes(this.state.currentId)) {
      LikeActions.destroyLike(this.props.recipeId);
    } else {
      LikeActions.addLike(this.props.recipeId);
    }
  },
  likeButton(){
    if (this.state.currentId === undefined) {
      return (
        <OverlayTrigger trigger="click" placement="top" overlay={<Popover id="please_login">Please login to like a recipe</Popover>}>
         <div className={this.styling()} />
        </OverlayTrigger>
      );
    } else {
      return <div className={this.styling()} onClick={this.toggleLike} />;
    }
  },

  render() {
    return (
        <div className="flex-start">
          {this.likeButton()}
          {this.likeNumber()}
        </div>
    );
  }
});

module.exports = LikeButton;
