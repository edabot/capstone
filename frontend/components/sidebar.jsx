const React = require("react");
const TagActions = require('../actions/tag_actions');
const SidebarStore = require('../stores/sidebar_store');
const SidebarGroup = require('./sidebar_group');

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
  render(){
    return(
      <div className="sidebar">
        {
          this.state.sidebar.map(sidebarGroup => {
            return <SidebarGroup key={sidebarGroup.name} group={sidebarGroup} />;
          })
        }
      </div>
    );
  }
});

module.exports = Sidebar;
