const React = require("react");

const SidebarItem = React.createClass({
  render(){
    return(
      <div className="flex-start sidebar-recipe-item">
        <div>
          <img src={this.props.recipe.image_url.replace("upload", "upload/t_sidebar").replace("png", "jpg")} className="img-responsive" />
        </div>
        <div className="sidebar-item-text">
          {this.props.recipe.title}
        </div>
      </div>
    );
  }
});

module.exports = SidebarItem;
