class API::UsersController < ApplicationController
  def index
    users = [{ id: 1, name: "heshie" }, { id: 2, name: "yehudis" }]
    render json: { users: users}
  end
end
