'use strict';

const React = require('react');
const RecipeFormStore = require('../stores/recipe_form_store');
const RecipeStore = require('../stores/recipe_store');
const RecipeActions = require('../actions/recipe_actions');
const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;
const UploadButton = require('./upload_button');

import Draft from 'draft-js';
const {Editor, EditorState, RichUtils} = Draft;

import {stateFromHTML} from 'draft-js-import-html';
import {stateToHTML} from 'draft-js-export-html';

const html="<h2>Ingredients</h2><ul><li>Ingredient2</li></ul><h2>Instructions</h2>" +
"<p>how to make it</p>";

let new_html = "";

let contentState = stateFromHTML(html);

class MyEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {editorState: EditorState.createWithContent(contentState)};
    // this.state = {editorState: EditorState.createEmpty()};
    this.onChange = (editorState) => {
      this.setState({editorState});
    };
    this.handleKeyCommand = this.handleKeyCommand.bind(this);
  }
  handleKeyCommand(command) {
    const newState = RichUtils.handleKeyCommand(this.state.editorState, command);
    if (newState) {
      this.onChange(newState);
      return true;
    }
    return false;
  }

  _onBoldClick() {
     this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
   }
  _onItalicClick() {
     this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'ITALIC'));
   }
   _onH1Click(){
     this.onChange(RichUtils.toggleBlockType(this.state.editorState, 'header-one'));
   }
   _onH2Click(){
     this.onChange(RichUtils.toggleBlockType(this.state.editorState, 'header-two'));
   }
   _onULClick(){
     this.onChange(RichUtils.toggleBlockType(this.state.editorState, 'unordered-list-item'));
   }
   _onOLClick(){
     this.onChange(RichUtils.toggleBlockType(this.state.editorState, 'ordered-list-item'));
   }
   _onBQClick(){
     this.onChange(RichUtils.toggleBlockType(this.state.editorState, 'blockquote'));
   }

   render() {
     return (
       <div>
         <button onClick={this._onBoldClick.bind(this)}>Bold</button>
         <button onClick={this._onItalicClick.bind(this)}>Italic</button>
         <button onClick={this._onULClick.bind(this)}>UL</button>
         <button onClick={this._onOLClick.bind(this)}>OL</button>
         <button onClick={this._onH1Click.bind(this)}>H1</button>
         <button onClick={this._onH2Click.bind(this)}>H2</button>
         <button onClick={this._onBQClick.bind(this)}>blockquote</button>

         <Editor
           editorState={this.state.editorState}
           handleKeyCommand={this.handleKeyCommand}
           onChange={this.onChange}
         />
       </div>
     );
   }
 }


 const RecipeForm = React.createClass({
   getInitialState(){
     return{title: "",
            description: "",
            ingredients: "",
            instructions: "",
            imageUrl: "",
            ovenTemp: 0,
            };
   },
   componentDidMount(){
     this.storeListener = RecipeFormStore.addListener(this._updateRecipe);
   },
   _updateRecipe(){
     let recipe = RecipeStore.getNewest();
     hashHistory.push('/recipes/' + recipe.id);
   },
   componentWillUnmount(){
     this.storeListener.remove();
   },
   _handleTitleChange(e){
     e.preventDefault();
     this.setState({title: e.target.value});
   },
   _handleDescriptionChange(e){
     e.preventDefault();
     this.setState({description: e.target.value});
   },
   _handleImageChange(imageUrl){
     this.setState({imageUrl: imageUrl});
   },
   _handleSubmit(){
     RecipeActions.createRecipe({
       title: this.state.title,
       description: this.state.description,
       ingredients: this.state.ingredients,
       instructions: this.state.instructions,
       image_url: this.state.imageUrl
     });
   },
   render(){
     return(
       <div>

       <img className="img-responsive" src={this.state.imageUrl} />

       <UploadButton imageUrl={this.state.imageUrl}
                     imageChange={this._handleImageChange}/>

       <form className="recipe-form">

         <div className="form-group">
           <label>Title:</label>
           <input
             className="form-control"
             onChange={this._handleTitleChange}
             value={this.state.title} />
         </div>

         <div className="form-group">
           <label>Description:</label>
           <input
             className="form-control"
             onChange={this._handleDescriptionChange}
             value={this.state.description} />
         </div>

         <MyEditor />

           <button className="btn btn-block btn-success"
             onClick={this._handleSubmit}>Save Recipe</button>

         </form>
       </div>
     );
   }
 });

module.exports = RecipeForm;
