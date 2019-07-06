class ProfilesController < ApplicationController
  layout 'profile'
  before_action :authenticate_user!, except: [:show]
  before_action :set_user
  before_action :set_profile, only: [:show, :edit, :update, :destroy]
  before_action :check_current_profile, only: [:edit, :update]

  def index
    @profiles = Profile.all
  end

  def new
    @profile = Profile.new
  end

  def create
    @profile = @user.build_profile(profile_params)
    if @profile.save
      if @profile.avatar.attached?
        redirect_to profile_path(@user.profile.id), notice: '¡ Perfil Creado Correctamente !'
      else
        @profile.avatar.attach(io: File.open(Rails.root.join("app", "assets", "images", "default_avatar.png")), filename: 'default_avatar.png' , content_type: "image/png")
        redirect_to profile_path(@user.profile.id), notice: '¡ Perfil Creado Correctamente !'
      end
    else
      render :action => 'new'
    end
  end

  def show

  end

  def edit

  end

  def update
    if @profile.update(profile_params)
      redirect_to profile_path, notice: '¡ Perfil actualizado correctamente !'
    else
      render :edit, alert: 'Tú Perfil no se pudo actualizar, ¡intente nuevamente!'
    end
  end

  private

  def set_user
    @user = current_user
  end

  def set_profile
    @profile = Profile.find(params[:id])
  end

  def profile_params
    params.require(:profile).permit(:bio, :birthday, :country, :clantag, :clancoc, :twitter, :avatar, user_attributes: [:name])
  end

  def check_current_profile
    if current_user.present?
      if @profile.user_id != @user.id
        redirect_back fallback_location: articles_path, alert: "Estas intentando acceder a un perfil que no te pertenece"
      end
    else
      redirect_back fallback_location: articles_path, alert: "Tu Sesión ha expirado"
    end
  end

end
