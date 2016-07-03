const React = require('react');

const Comment = React.createClass({
  render(){
    return(
      <div>
        <div>{this.props.comment.author}</div>
        <div>{this.props.comment.body}</div>
      </div>
    );
  }
});

module.exports = Comment;
