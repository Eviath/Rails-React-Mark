class Admin::SocialsController < AdminController
  before_action :set_social, only: [:show, :edit, :update, :destroy]

  # GET /admin/socials
  # GET /admin/socials.json
  def index
    @socials = Social.all
  end

  # GET /admin/socials/1
  # GET /admin/socials/1.json
  def show
  end

  # GET /admin/socials/new
  def new
    @social = Social.new
  end

  # GET /admin/socials/1/edit
  def edit
  end

  # POST /admin/socials
  # POST /admin/socials.json
  def create
    @social = Social.new(social_params)
    @social.save
  end

  # PATCH/PUT /admin/socials/1
  # PATCH/PUT /admin/socials/1.json
  def update
    @social.update!(social_params)
  end

  # DELETE /admin/socials/1
  # DELETE /admin/socials/1.json
  def destroy
    @social.destroy
    respond_to do |format|
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_social
      @social = Social.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def social_params
      params.require(:social).permit(:id, :pagename, :pageurl, :imageurl, :created_at, :updated_at)
    end
end
