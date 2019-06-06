class ArticlesController < ApplicationController
  layout 'blog'
  before_action :authenticate_user!, except: [:index, :show]
  before_action :set_user
  before_action :set_article, only: [:show, :edit, :update, :destroy]
  before_action :check_current_user, only: [:edit, :update]

  def index
    @articles = Article.paginate(page: params[:page], per_page: 5)
  end

  def new
    @article = Article.new
  end

  def create
    @article = @user.articles.build(article_params)
    if @article.save
      redirect_to my_posts_path, notice: "¡ Post creado exitosamente !"
    else
      render :action => 'new'
    end
  end

  def show
    @comments = @article.comments.paginate(page: params[:page], per_page: 5).order('created_at desc')
  end

  def myposts
    @articles = Article.where(user_id: @user).paginate(page: params[:page], per_page: 5).order('created_at desc')
  end

  def edit

  end

  def update
    if @article.update(article_params)
      redirect_to my_posts_path, notice: "¡ Se ha actualizado el Post satisfactoriamente !"
    else
      render :action => 'edit'
    end
  end

  def destroy
    if @article.destroy
      redirect_to my_posts_path, notice: "¡ Post Eliminado !"
    else
      redirect_to my_posts_path, alert: '¡ No fue posible eliminar el post seleccionado !'
    end
  end

  def search
    if params[:search].blank?
      redirect_to(articles_path, alert: "Debes Ingresar una palabra") and return
    else
      @parameter = params[:search].downcase
      @articles = Article.all.where('lower(title) LIKE :search', search: "%#{@parameter}%").paginate(page: params[:page], per_page: 5).order('created_at desc')
      @result = @articles.count
    end
  end

  private

  def set_user
    @user = current_user
  end

  def set_article
    @article = Article.find(params[:id])
  end

  def article_params
    params.require(:article).permit(:title, :description)
  end

  def check_current_user
    if current_user.present?
      if @article.user_id != @user.id
        redirect_back fallback_location: articles_path, alert: "Estas intentando acceder a un post que no has publicado"
        end
    else
      redirect_back fallback_location: articles_path, alert: "Tu Sesión ha expirado"
    end
  end

end
