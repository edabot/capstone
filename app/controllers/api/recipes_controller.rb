class Api::RecipesController < ApplicationController

  def create
    @recipe = Recipe.new(recipe_params)
    if @recipe.save
      render 'api/recipes/show'
    else
      render json: @recipe.errors, status: 422
    end
  end

  def show
    @recipe = Recipe.find(params[:id])
    render :show
  end

  def index
    @recipes = Recipe.all
    render :index
  end

  def update
    @recipe = Recipe.find(params[:id])
    @recipe.update_attributes(recipe_params)
    render :show
  end

  def destroy
    @recipe = Recipe.find(params[:id])
    @recipe.destroy
    render :show
  end

  private

  def recipe_params
    params.require(:recipe).permit(
      :title,
      :description,
      :ingredients,
      :instructions,
      :cook_time,
      :oven_temp,
      :image_url,
      :user_id)
  end

end
