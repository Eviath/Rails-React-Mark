class V1::SocialsController < ActionController::Base
  def index
    render json: { socials: Social.all }
  end
end
