'use strict';

const React = require('react');
const RecipeFormStore = require('../stores/recipe_form_store');
const RecipeStore = require('../stores/recipe_store');
const RecipeActions = require('../actions/recipe_actions');
const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;
const UploadButton = require('./upload_button');
const Button = require('react-bootstrap').Button;
const ButtonGroup = require('react-bootstrap').ButtonGroup;

import Draft from 'draft-js';
const {Editor, EditorState, RichUtils} = Draft;

import {stateFromHTML} from 'draft-js-import-html';
import {stateToHTML} from 'draft-js-export-html';

// const html="<h2>Ingredients</h2><ul><li>Ingredient</li></ul><h2>Instructions</h2>" +
// "<p>how to make it</p>";
//
// let new_html = "";
//
// let contentState = stateFromHTML(html);

class MyEditor extends React.Component {
  constructor(props) {
    super(props);
    let contentState = stateFromHTML(this.props.instructions);
    this.state = {editorState: EditorState.createWithContent(contentState)};
    // this.state = {editorState: EditorState.createEmpty()};
    this.onChange = (editorState) => {
      this.setState({editorState});
      this.props.updateContent(stateToHTML(this.state.editorState.getCurrentContent()));
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
   _onH2Click(){
     this.onChange(RichUtils.toggleBlockType(this.state.editorState, 'header-two'));
   }
   _onH3Click(){
     this.onChange(RichUtils.toggleBlockType(this.state.editorState, 'header-three'));
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
         <div className="editor-button-group">
           <ButtonGroup>
           <Button onClick={this._onBoldClick.bind(this)}><strong>Bold</strong></Button>
           <Button onClick={this._onItalicClick.bind(this)}><i>Italic</i></Button>
           <Button onClick={this._onULClick.bind(this)}><i className="fa fa-list-ul" aria-hidden="true"></i></Button>
           <Button onClick={this._onOLClick.bind(this)}><i className="fa fa-list-ol" aria-hidden="true"></i></Button>
           <Button onClick={this._onH2Click.bind(this)}><strong>H2</strong></Button>
           <Button onClick={this._onH3Click.bind(this)}>H3</Button>
           <Button onClick={this._onBQClick.bind(this)}>
             <i className="fa fa-quote-left" aria-hidden="true"></i>&nbsp;&nbsp;
             <i className="fa fa-quote-right" aria-hidden="true"></i>
           </Button>
           </ButtonGroup>
         </div>
         <Editor
           editorState={this.state.editorState}
           handleKeyCommand={this.handleKeyCommand}
           onChange={this.onChange}
         />
       </div>
     );
   }
 }

 const RecipeEditForm = React.createClass({
   getInitialState(){
     return{title: "",
            description: "",
            ingredients: "stuff that goes in",
            instructions: "",
            imageUrl: "",
            ovenTemp: 0,
            };
   },
   componentDidMount(){
     this.storeListener = RecipeFormStore.addListener(this._updateRecipe);
     this.recipeStoreListener = RecipeStore.addListener(this._receiveRecipe);
     RecipeActions.getRecipe(this.props.params.recipeId);
   },
   _updateRecipe(){
     let recipe = RecipeStore.getNewest();
     hashHistory.push('/recipes/' + this.props.params.recipeId);
   },
   _receiveRecipe(){
     let recipe = RecipeStore.getRecipe(this.props.params.recipeId);
     this.setState({title: recipe.title,
                    description: recipe.description,
                    instructions: recipe.instructions,
                    imageUrl: recipe.image_url});
   },
   componentWillUnmount(){
     this.storeListener.remove();
     this.recipeStoreListener.remove();
   },
   _handleTitleChange(e){
     e.preventDefault();
     this.setState({title: e.target.value});
   },
   _handleDescriptionChange(e){
     e.preventDefault();
     this.setState({description: e.target.value});
   },
   _handleContentChange(content){
     this.setState({instructions: content});
   },
   _handleImageChange(imageUrl){
     this.setState({imageUrl: imageUrl});
   },
   _handleSubmit(){
     RecipeActions.updateRecipe({
       id: parseInt(this.props.params.recipeId),
       title: this.state.title,
       description: this.state.description,
       ingredients: this.state.ingredients,
       instructions: this.state.instructions,
       image_url: this.state.imageUrl
     });
   },
   myEditor(){
     if (this.state && this.state.instructions && this.state.instructions !== "") {
       return <MyEditor instructions={this.state.instructions}
                        updateContent={this._handleContentChange}/>;
     }
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
           placeholder="what you call it"
             className="form-control editor-title"
             onChange={this._handleTitleChange}
             value={this.state.title} />
         </div>

         <div className="form-group">
           <label>Description:</label>
           <input
             placeholder="tell us about it"
             className="form-control editor-description"
             onChange={this._handleDescriptionChange}
             value={this.state.description} />
         </div>
         <div className="editor-instructions">
          {this.myEditor()}
         </div>
         <button className="btn btn-block btn-success top10"
             onClick={this._handleSubmit}>Save Recipe</button>

         </form>
       </div>
     );
   }
 });

module.exports = RecipeEditForm;
