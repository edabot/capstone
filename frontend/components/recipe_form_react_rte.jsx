'use strict';

const React = require('react');
const RecipeFormStore = require('../stores/recipe_form_store');
const RecipeStore = require('../stores/recipe_store');
const RecipeActions = require('../actions/recipe_actions');
const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;
const UploadButton = require('./upload_button');

const RichTextEditor = require('react-rte');

class MyStatefulEditor extends Component {
  static propTypes = {
    onChange: PropTypes.func
  };

  state = {
    value: RichTextEditor.createEmptyValue()
  }

  onChange = (value) => {
    this.setState({value});
    if (this.props.onChange) {
      // Send the changes up to the parent component as an HTML string.
      // This is here to demonstrate using `.toString()` but in a real app it
      // would be better to avoid generating a string on each change.
      this.props.onChange(
        value.toString('html')
      );
    }
  };

  render () {
    return (
      <RichTextEditor
        value={this.state.value}
        onChange={this.onChange}
      />
    );
  }
}


const RecipeForm = React.createClass({
  render(){
    return(
        <MyStatefulEditor />
    );
  }
});

module.exports = RecipeForm;
