const React = require('react');
const RecipeFormStore = require('../stores/recipe_form_store');
const RecipeStore = require('../stores/recipe_store');
const RecipeActions = require('../actions/recipe_actions');
const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;
const UploadButton = require('./upload_button');

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
  _handleIngredientsChange(e){
    e.preventDefault();
    this.setState({ingredients: e.target.value});
  },
  _handleInstructionsChange(e){
    e.preventDefault();
    this.setState({instructions: e.target.value});
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

        <div className="form-group">
          <label>Ingredients:</label>
          <textarea
            className="form-control"
            onChange={this._handleIngredientsChange}
            value={this.state.ingredients}/>
        </div>

          <div className="form-group">
            <label>Instructions:</label>
            <textarea
              className="form-control"
              onChange={this._handleInstructionsChange}
            value={this.state.instructions}/>
        </div>

          <button className="btn btn-block btn-success"
            onClick={this._handleSubmit}>Save Recipe</button>

        </form>
      </div>
    );
  }
});

module.exports = RecipeForm;
