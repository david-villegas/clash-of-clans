class ApplicationController < ActionController::Base
  before_action :configure_sign_up_params, if: :devise_controller?
  rescue_from RestClient::Forbidden, with: :handle_forbidden
  rescue_from ActiveRecord::RecordNotFound, with: :handle_exception

  protected

	def configure_sign_up_params
	  devise_parameter_sanitizer.permit(:sign_up, keys: [:name])
 	end

  def after_sign_in_path_for(resource)
    articles_path
  end

  def after_sign_out_path_for(resource)
    articles_path
  end

  private

  def handle_forbidden
    redirect_back fallback_location: root_path, alert: "Error en conexión con el API De Clash of Clans"
    # render html: 'Verificar el TOKEN', status: :not_found
  end

  def handle_exception
    redirect_back fallback_location: articles_path, alert: "Registro no encontrado"
  end

end
