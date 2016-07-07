const React = require('react');
const FormGroup = require('react-bootstrap').FormGroup;
const ControlLabel = require('react-bootstrap').ControlLabel;
const FormControl = require('react-bootstrap').FormControl;
const HelpBlock = require('react-bootstrap').HelpBlock;
const Button = require('react-bootstrap').Button;
const CommentActions = require('../actions/comment_actions');

const CommentForm = React.createClass({
  getInitialState(){
    return {body: ""};
  },
  _handleCommentChange(e){
    this.setState({body: e.target.value});
  },
  _saveComment(){
    CommentActions.addComment({body: this.state.body,
                recipe_id: this.props.recipeId});
  },
  render() {
    return(
      <div>
        <form>
          <FormGroup controlId="formBasicText">
            <ControlLabel><p className="recipe-section">Add a comment</p></ControlLabel>
            <FormControl
              componentClass="textarea"
              placeholder="Enter comment"
              value={this.state.body}
              onChange={this._handleCommentChange}
            />
          </FormGroup>
        </form>
        <Button bsStyle="default" onClick={this._saveComment} block>save comment</Button>
      </div>
    );
  }
});

module.exports = CommentForm;
