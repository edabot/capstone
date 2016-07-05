const React = require("react");
const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;

const SidebarItem = React.createClass({
  recipeLink(id){
    hashHistory.push("/recipes/" + this.props.recipe.id);
  },
  render(){
    return(
      <div className="flex-start sidebar-recipe-item pointer" onClick={this.recipeLink}>
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
