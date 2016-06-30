const React = require('react');
const RecipeFormStore = require('../stores/recipe_form_store');
const RecipeStore = require('../stores/recipe_store');
const RecipeActions = require('../actions/recipe_actions');
const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;

const RecipeForm = React.createClass({
  getInitialState(){
    return{title: "",
           description: "",
           ingredients: "",
           instructions: "",
           image_url: "",
           oven_temp: 0,
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
  _handleSubmit(){
    RecipeActions.createRecipe({
      title: this.state.title,
      description: this.state.description,
      ingredients: this.state.ingredients,
      instructions: this.state.instructions,
    });
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
