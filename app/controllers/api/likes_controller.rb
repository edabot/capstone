class Api::LikesController < ApplicationController

  def create
    like = Like.new(user_id: current_user.id, recipe_id: like_params[:recipe_id])
    if like.save
      render json: like, status: 200
    else
      render json: like.errors, status: 422
    end
  end


  def destroy
    like = Like.find_by(
      user_id: current_user.id,
      recipe_id: like_params[:recipe_id])
    if like.destroy
      render json: like, status: 200
    else
      render json: like.errors, status: 422
    end
  end

  private

  def like_params
    params.require(:like).permit(:recipe_id)
  end

end
