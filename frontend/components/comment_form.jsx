const React = require('react');
const FormGroup = require('react-bootstrap').FormGroup;
const ControlLabel = require('react-bootstrap').ControlLabel;
const FormControl = require('react-bootstrap').FormControl;
const HelpBlock = require('react-bootstrap').HelpBlock;
const Button = require('react-bootstrap').Button;

const CommentForm = React.createClass({
  getInitialState(){
    return {body: ""};
  },
  _handleCommentChange(e){
    this.setState({body: e.target.value});
  },
  render() {
    return(
      <div>
        <form>
          <FormGroup controlId="formBasicText">
            <ControlLabel>Add a comment</ControlLabel>
            <FormControl
              componentClass="textarea"
              placeholder="Enter comment"
              value={this.state.body}
              onChange={this._handleCommentChange}
            />
          </FormGroup>
        </form>
        <Button bsStyle="default" onClick={this._savecomment} block>save comment</Button>
      </div>
    );
  }
});

module.exports = CommentForm;