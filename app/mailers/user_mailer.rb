class UserMailer < ApplicationMailer
  def notify(user)
    @user = user
    mail(to: @user.email, subject: '¡Tú cuenta ha sido registrada!')
  end
end
