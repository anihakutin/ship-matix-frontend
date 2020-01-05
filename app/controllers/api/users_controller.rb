class API::UsersController < ApplicationController
  def index
    users = [{ id: 1, name: "heshie" }, { id: 2, name: "yehudis" }]
    render json: { users: users}
  end

  def create
    user = User.create(user_params)

    if user.valid?
      SECRET_KEY = Rails.application.secrets.secret_key_base.to_s
      payload = { user_id: user.id }
      token = encode_token(payload, SECRET_KEY)
      render json: { user: user, jwt: token}
    else
      render json: { errors: user.errors.messages.full_messages }, status: :not_acceptable
    end
  end

  private

  def user_params
    params.permit(:email, :password)
  end
end
