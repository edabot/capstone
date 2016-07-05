const React = require('react');
const UserActions = require('../actions/user_actions');
const UserStore = require('../stores/user_store');
const UserRecipeIndexItem = require('./user_recipe_index_item');

const Author = React.createClass({
  getInitialState(){
    return {user: {recipes: [], image_url: ""}};
  },
  componentDidMount(){
    this.storeListener = UserStore.addListener(this.receiveUser);
    UserActions.getUserPage(this.props.params.userId);
  },
  receiveUser(user){
    this.setState({user: UserStore.getUser(this.props.params.userId)});
  },
  componentWillUnmount(){
    this.storeListener.remove();
  },
  render(){
    return(
      <div className="member-page">
        <img src={this.state.user.image_url} />
        {this.state.user.username}
        {this.state.user.recipes.map(recipe => {
          return <UserRecipeIndexItem recipe={recipe}/>;
        })}
      </div>
    );
  }
});

module.exports = Author;
