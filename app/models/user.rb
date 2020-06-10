class User < ApplicationRecord
  validates :email, uniqueness: true, presence: true
  has_many :techniques, dependent: :destroy
  has_many :training_sessions, dependent: :destroy
end
