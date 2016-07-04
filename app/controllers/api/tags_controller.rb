class Api::TagsController < ApplicationController

  def show
    tag = Tag.find_by(name: params[:id])
    @recipes = tag.recipes
    render :show
  end

  def index
    tag = Tag.find_by(name: params[:id])
    @recipes = tag.recipes
    render :index
  end

  private

  def tag_params
    params.require(:tag).permit(:name)
  end

end
