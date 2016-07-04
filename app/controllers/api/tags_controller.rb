class Api::TagsController < ApplicationController

  def create
  end

  def index
    @recipes = Recipe
  end

  private

  def tag_params
    params.require(:tag).permit(:name)
  end

end
