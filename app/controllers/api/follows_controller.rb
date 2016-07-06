class Api::FollowsController < ApplicationController

  def create
    follow = Follow.new(leader_id: follow_params[:leader_id],
                        follower_id: current_user.id)
    if follow.save
      render json: follow, status: 200
    else
      render json: like.errors, status: 422
    end
  end

  def destroy
    follow = Follow.find_by(leader_id: follow_params[:leader_id],
                          follower_id: current_user.id)
    if follow.destroy
      render json: follow, status: 200
    else
      render json: follow.errors, status: 422
    end
  end

  private

  def follow_params
    params.require(:follow).permit(:leader_id, :follower_id)
  end

end
