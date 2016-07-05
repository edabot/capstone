const React = require("react");

const SidebarItem = React.createClass({
  render(){
    return(
      <div>
        <img src={this.props.recipe.image_url} className="img-responsive" />
      {this.props.recipe.title}
      </div>
    );
  }
});

module.exports = SidebarItem;
