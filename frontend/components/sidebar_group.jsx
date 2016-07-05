const React = require("react");
const SidebarItem = require('./sidebar_item');

const SidebarGroup = React.createClass({
  render(){
    return (
      <div>
        <div className="sidebar-category">
          {this.props.group.name}
        </div>
        <div className="sidebar-recipes">
          {this.props.group.recipes.map(recipe => {
            return <SidebarItem key={recipe.id} recipe={recipe} />;
          })}

        </div>


      </div>
    );
  }
});

module.exports = SidebarGroup;
