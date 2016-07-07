const React = require("react");
const TagActions = require('../actions/tag_actions');
const SidebarStore = require('../stores/sidebar_store');
const SidebarGroup = require('./sidebar_group');
const Button = require('react-bootstrap').Button;
const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;
const SessionStore = require('../stores/session_store');
const OverlayTrigger = require('react-bootstrap').OverlayTrigger;
const Popover = require('react-bootstrap').Popover;

const Sidebar = React.createClass({
  getInitialState(){
    return {sidebar: []};
  },
  componentDidMount(){
    this.storeListener = SidebarStore.addListener(this.setSidebar);
    TagActions.getSidebar();
  },
  setSidebar(){
    this.setState({sidebar: SidebarStore.getSidebar()});
  },
  componentWillUnmount(){
    this.storeListener.remove();
  },
  newRecipe(){
    hashHistory.push("/recipes/new");
  },
  submitRecipeButton(){
    if (SessionStore.currentUser().id === undefined) {
      return (
        <OverlayTrigger trigger="click" placement="top" overlay={<Popover id="please_login">Please login to submit a recipe</Popover>}>
          <Button bsStyle="default">Submit a Recipe</Button>
        </OverlayTrigger>
      );
    } else {
      return <Button onClick={this.newRecipe} bsStyle="success">Submit a Recipe</Button>;
    }
  },
  render(){
    return(
      <div className="sidebar">
        {
          this.state.sidebar.map(sidebarGroup => {
            return <SidebarGroup key={sidebarGroup.name} group={sidebarGroup} />;
          })
        }
        {this.submitRecipeButton()}
      </div>
    );
  }
});

module.exports = Sidebar;
