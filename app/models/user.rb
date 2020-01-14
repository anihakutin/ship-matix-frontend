class User < ApplicationRecord
  has_secure_password
  has_many :orders, :dependent => :delete_all


  validates :name, :email, :password, presence: true
  validates :email, uniqueness: true
  validates :password, :length => {:within => 6..40}
end
