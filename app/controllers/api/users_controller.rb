class API::UsersController < ApplicationController
  skip_before_action :require_login, only: [:create]

  def index
    @user = session_user
    render json: @user
  end

  def create
    user = User.create(user_params)

    if user.valid?
      payload = { user_id: user.id }
      token = encode_token(payload)
      render json: { user: user, jwt: token}
    else
      render json: { errors: user.errors.messages }, status: :not_acceptable
    end
  end

  private

  def user_params
    params.permit(:name, :email, :password)
  end
end
