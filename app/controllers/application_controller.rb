class ApplicationController < ActionController::Base
  include ActionController::Serialization

  skip_before_action :verify_authenticity_token
  before_action :require_login

  def encode_token(payload)
    my_secret = Rails.application.secrets.secret_key_base.to_s
    JWT.encode(payload, my_secret)
  end

  def auth_header
    request.headers['Authorization']
  end

  def decoded_token
    if auth_header
      my_secret = Rails.application.secrets.secret_key_base.to_s
      token = auth_header.split(' ')[1]
      begin
        JWT.decode(token, my_secret, true, algorithm: 'HS256')
      rescue JWT::DecodeError
        [] #Fixme render login error if user messes with token, currently throws nill exception
      end
    end
  end

  def session_user
    decoded_hash = decoded_token
    if !decoded_hash.nil?
      user_id = decoded_hash[0]['user_id']
      @user = User.find_by(id: user_id)
    else
      nil
    end
  end

  def logged_in?
    !!session_user
  end

  def require_login
    render json: { message: "Please Login" }, status: :unauthorized unless logged_in?
  end
end
