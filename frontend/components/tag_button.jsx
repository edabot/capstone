const React = require("react");
const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;

var TagButton = React.createClass({

  goToTagIndex(){
    hashHistory.push('/tags/' + this.props.tag);
  },
  render: function () {
    return (
      <div className="tag-button pointer"
              onClick={this.goToTagIndex}>
              {this.props.tag}
      </div>
    );
  }
});

module.exports = TagButton;
