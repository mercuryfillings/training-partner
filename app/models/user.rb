class User < ApplicationRecord
  has_secure_password
  validates :email, uniqueness: true, presence: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :password, length: { minimum: 6 }
  has_many :techniques, dependent: :destroy
  has_many :training_sessions, dependent: :destroy
end
