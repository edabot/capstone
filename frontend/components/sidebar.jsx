const React = require("react");
const TagActions = require('../actions/tag_actions');
const SidebarStore = require('../stores/sidebar_store');
const SidebarGroup = require('./sidebar_group');
const Button = require('react-bootstrap').Button;
const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;

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
  render(){
    return(
      <div className="sidebar">
        {
          this.state.sidebar.map(sidebarGroup => {
            return <SidebarGroup key={sidebarGroup.name} group={sidebarGroup} />;
          })
        }
        <Button onClick={this.newRecipe} bsStyle="success">Submit a Recipe</Button>
      </div>
    );
  }
});

module.exports = Sidebar;
