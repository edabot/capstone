const React = require('react');
const RecipeFormStore = require('../stores/recipe_form_store');
const RecipeStore = require('../stores/recipe_store');
const RecipeActions = require('../actions/recipe_actions');
const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;

const RecipeForm = React.createClass({
  getInitialState(){
    return{recipe: {}};
  },
  componentDidMount(){
    this.formStoreListener = RecipeFormStore.addListener(this._updateRecipe);
    this.recipeStoreListener = RecipeStore.addListener(this._fillOutRecipe);
    RecipeActions.getRecipe(this.props.params.recipeId);
  },
  _fillOutRecipe(){
    const recipe = RecipeStore.getRecipe(this.props.params.recipeId);
    this.setState({title: recipe.title,
           description: recipe.description,
           ingredients: recipe.ingredients,
           instructions: recipe.instructions,
           image_url: recipe.image_url,
           oven_temp: recipe.oven_temp,
           id: recipe.id
         });
  },
  _updateRecipe(){
    hashHistory.push('/recipes/' + this.props.params.recipeId);
  },
  componentWillUnmount(){
    this.formStoreListener.remove();
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
  _handleIngredientsChange(e){
    e.preventDefault();
    this.setState({ingredients: e.target.value});
  },
  _handleInstructionsChange(e){
    e.preventDefault();
    this.setState({instructions: e.target.value});
  },

  _handleSubmit(){
    RecipeActions.updateRecipe(this.state);
  },
  render(){
    return(
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
    );
  }
});

module.exports = RecipeForm;
