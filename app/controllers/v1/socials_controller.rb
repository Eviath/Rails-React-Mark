class V1::SocialsController < ActionController::Base
  def index
    render json: { socials: Social.all }
  end

  def show
    render json: {social: Social.find(params[:id])}
  end

end
