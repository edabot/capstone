const React = require('react');
const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;
const SessionStore = require('../stores/session_store');
const CommentActions = require('../actions/comment_actions');

const Comment = React.createClass({
  _authorImage(){
    if (this.props.comment.author.image_url === "" ||
        this.props.comment.author.image_url === undefined) {
      return(
        <div className="author-big-letter">
          {this.props.comment.author.username[0]}
        </div>
      );
    } else {
      return(
        <div className="author-thumbnail">
          <img src={this.props.comment.author.image_url.replace("upload",
            "upload/w_400,h_400,c_crop,g_face,r_max/w_40").replace('png', 'jpg')} />
        </div>
      );
    }
  },
  memberLink(){
    hashHistory.push('/member/' + this.props.comment.author.id);
  },
  deleteComment(){
    CommentActions.destroyComment(this.props.comment.id);
  },
  deleteButton(){
    if (this.props.comment.author.id === SessionStore.currentUser().id) {
      return <div className="delete-button pointer" onClick={this.deleteComment}>delete</div>;
    }
  },
  render(){
    return(
      <div className="comment-box">
        <div>
          <div className="comment-author flex-start pointer" onClick={this.memberLink}>
            {this._authorImage()}
            <div className="author-name">
              {this.props.comment.author.username}
            </div>
          </div>
          {this.deleteButton()}
          <div className="comment-body">{this.props.comment.body}</div>
        </div>
      </div>
    );
  }
});

module.exports = Comment;
