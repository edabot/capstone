class Api::TaggingsController < ApplicationController

  def create
    tagging = Tagging.new(tagging_params)
    if tagging.save
      render json: tagging, status: 200
    else
      render json: like.errors, status: 422
    end
  end

  def destroy
    tagging = Tagging.find_by(
      tag_id: tagging_params[:tag_id],
      recipe_id: tagging_params[:recipe_id])
    if tagging.destroy
      render json: tagging, status: 200
    else
      render json: tagging.errors, status: 422
    end
  end

  private

  def tagging_params
    params.require(:tagging).permit(:tag_id, :recipe_id)
  end

end
