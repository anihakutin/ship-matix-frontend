class API::AuthController < ApplicationController
    skip_before_action :require_login, only: [:login, :auto_login]

    def login
      user = User.find_by(email: params[:email])
      if user && user.authenticate(params[:password])
        payload = { user_id: user.id }
        token = encode_token(payload)
        render json: { user: UserSerializer.new(user).as_json, jwt: token, success: "Welcome Back, #{user.name}" }
      else
        render json: { failure: "Log In Failed! Username Or Password Invalid"}
      end
    end

    def auto_login
      if session_user
        render json: { user: UserSerializer.new(session_user).as_json, success: "You are logged in." }
      else
        render json: { failure: "No User Logged In."}
      end
    end

    def user_is_authed
      render json: { success: "You are authorized."}
    end
  end
