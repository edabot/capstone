class Api::TagsController < ApplicationController

  def show
    tag = Tag.find_by(name: params[:id])
    @recipes = tag.recipes
    render :show
  end

  def index
    @tags = []
    @tags[0] = Tag.find_by(name: "BBQ")
    @tags[1] = Tag.find_by(name: "vegetarian")
    @tags[2] = Tag.find_by(name: "cookie")
    render :index
  end

  private

  def tag_params
    params.require(:tag).permit(:name)
  end

end
