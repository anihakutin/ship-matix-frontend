class API::UsersController < ApplicationController
  include Userable
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
      render json: { user: UserSerializer.new(user).as_json, jwt: token, success: "Welcome, #{user.name}" }
    else
      error = user.errors.map{ |attr, msg| attr.to_s.capitalize + ": " + msg + ". " }
      render json: { failure: error }
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :password)
  end
end
