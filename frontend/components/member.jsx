const React = require('react');
const UserActions = require('../actions/user_actions');
const UserStore = require('../stores/user_store');
const UserRecipeIndexItem = require('./user_recipe_index_item');
const FollowActions = require('../actions/follow_actions');
const SessionStore = require('../stores/session_store');
const Button = require('react-bootstrap').Button;
const OverlayTrigger = require('react-bootstrap').OverlayTrigger;
const Popover = require('react-bootstrap').Popover;

const Author = React.createClass({
  getInitialState(){
    return {user: {recipes: [], image_url: ""}, buttonText: "follow"};
  },
  componentDidMount(){
    this.storeListener = UserStore.addListener(this.receiveUser);
    UserActions.getUserPage(this.props.params.userId);
  },
  receiveUser(){
    this.setState({user: UserStore.getUser(this.props.params.userId)});
    if (this.state.user.followers.includes(SessionStore.currentUser().id)) {
      this.setState({buttonText: "following", styling: "success"});
    } else {
      this.setState({buttonText: "follow", styling: "default"});
    }
  },
  componentWillUnmount(){
    this.storeListener.remove();
  },
  toggleFollow(){
    if (this.state.buttonText === "follow") {
      FollowActions.addFollow(this.props.params.userId);
    } else {
      FollowActions.destroyFollow(this.props.params.userId);
    }
  },
  followButton(){
    if (SessionStore.currentUser().id === undefined) {
      return (
        <OverlayTrigger trigger="click" placement="top" overlay={
          <Popover id="please_login">Please login to follow an author</Popover>
        }>
          <Button bsStyle="default" >follow</Button>
        </OverlayTrigger>
      );
    } else if (this.state.user.id !== SessionStore.currentUser().id) {
      return (<Button bsStyle={this.state.styling}
        onClick={this.toggleFollow}>{this.state.buttonText}</Button>
      );
    }
  },
  componentWillReceiveProps: function(nextProps) {
    this.setState({user: nextProps.params.userId});
    UserActions.getUserPage(nextProps.params.userId);
  },
  render(){
    return(
      <div className="tag-index">
        <div className="member-bio">
          <div className="flex-column">
            <img src={this.state.user.image_url.replace("upload",
              "upload/w_400,h_400,c_crop,g_face,r_max,b_rgb:fafafa/w_200").replace("png", "jpg")} />
            <h2>
            {this.state.user.username}
            </h2>
            {this.followButton()}
           </div>
        </div>
        <div className="top10">
          {this.state.user.recipes.map(recipe => {
            return <UserRecipeIndexItem key={recipe.id} recipe={recipe}/>;
          })}
        </div>
      </div>
    );
  }
});

module.exports = Author;
