class CommentsController < ApplicationController

  def create
    @article = Article.find(params[:article_id])
    @comment = @article.comments.create(comment_params)
    redirect_to article_path(@article), notice: "¡ Comentario agregado !"
  end

  def update

  end

  private

  #Se usa el .merge(user_id: current_user.id) para guardar el id del usuario que genera el comentario.
  def comment_params
    params.require(:comment).permit(:body).merge(user_id: current_user.id)
  end

end
