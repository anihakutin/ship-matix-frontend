class User < ApplicationRecord
  has_secure_password
  has_many :orders, :dependent => :delete_all

  validates :name, :email, presence: true
  validates :email, uniqueness: true
end
