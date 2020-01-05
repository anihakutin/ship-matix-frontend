class API::AuthController < ApplicationController
  skip_before_action :require_login, only: [:login, :auto_login]

  def login
    user = User.find_by(email: params[:email])
    if user && user.authenticate(params[:password])
      SECRET_KEY = Rails.application.secrets.secret_key_base.to_s
      payload = { user_id: user.id }
      token = encode_token(payload, SECRET_KEY)
      render json: { user: user, jwt: token, success: "Welcome Back, #{user.name}"}
    else
      render json: { failure: "Log In Failed! Username Or Password Invalid"}
    end
  end

  def auto_login
    if session_user
      render json: session_user
    else
      render json: { errors: "No User Logged In."}
    end
  end

  def user_is_authed
    render json: { message: "You are authorized."}
  end
end
