class User < ApplicationRecord
  has_many :techniques, dependent: :destroy
  has_many :training_sessions, dependent: :destroy
end
