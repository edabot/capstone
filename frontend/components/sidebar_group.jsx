const React = require("react");
const SidebarItem = require('./sidebar_item');
const Link = require('react-router').Link

const SidebarGroup = React.createClass({
  render(){
    return (
      <div>
        <div className="sidebar-category">
          <Link to={"tags/" + this.props.group.name}>{this.props.group.name}</Link>
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
