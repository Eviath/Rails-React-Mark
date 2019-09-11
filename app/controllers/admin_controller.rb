class AdminController < ActionController::Base
  layout 'admin'
  before_action :authenticate_user!


  def index
  end
end
