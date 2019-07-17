class V1::ThingsController < ActionController::Base
  def index
    render json: { things: Thing.all }
  end
end
