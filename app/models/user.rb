class User < ApplicationRecord
  enum role: [:regular, :admin]
  has_one :profile, dependent: :destroy
  has_many :articles, dependent: :destroy

  validates :name, presence: true

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  after_initialize :set_default_role, if: :new_record?
  after_create :registration_mail

  def set_default_role
    self.role ||= :regular
  end

  # Este médoto, permite el envío de correo para aquellos usuarios que se registren por primera vez
  def registration_mail
    UserMailer.notify(self).deliver
  end
end
