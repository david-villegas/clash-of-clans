# Preview all emails at http://localhost:3000/rails/mailers/user_mailer
class UserMailerPreview < ActionMailer::Preview
  # Preview this email at http://localhost:3000/rails/mailers/user_mailer/notify
  def notify
    UserMailer.notify User.new(name: 'Supremacy', email: 'supremacy-test@supremacy.com')
  end
end
