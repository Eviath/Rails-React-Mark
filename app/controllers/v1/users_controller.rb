class V1::UsersController < ActionController::Base
  def current
    render json: { user: current_user }
  end
end
