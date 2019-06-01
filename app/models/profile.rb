class Profile < ApplicationRecord
  belongs_to :user
  has_one_attached :avatar

  validates :birthday, :bio, :country, presence: true
  validates :bio, length: { maximum: 250 }
  validate :correct_file_type

  # Para poder actualizar un campo con devise usando nested attributes, debemos utilizar la siguiente instrucción debajo.
  accepts_nested_attributes_for :user, update_only: true

  private

  def correct_file_type
    if avatar.attached? && !avatar.content_type.in?(%w(image/jpg image/jpeg image/png))
      errors.add(:avatar, 'Seleccionar solo archivos con extensión .jpg / .jpeg / .png')
    end
  end

end
