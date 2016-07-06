const React = require('react');
import Draft from 'draft-js';
const {Editor, EditorState, RichUtils} = Draft;
import {stateFromHTML} from 'draft-js-import-html';
import {stateToHTML} from 'draft-js-export-html';

let contentState = stateFromHTML(this.props.html);
// let html = stateToHTML(contentState);

class MyEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {editorState: EditorState.createWithContent(contentState)};
    // this.state = {editorState: EditorState.createEmpty()};
    this.onChange = (editorState) => this.setState({editorState});
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

 module.exports = MyEditor;
