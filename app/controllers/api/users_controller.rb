class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    @user.image_url= = "http://res.cloudinary.com/de7jh2mw5/image/upload/v1467761852/profileg.jpg"
    if @user.save
      login!(@user)
      render 'api/users/show'
    else
      render json: @user.errors, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
    render :show
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
