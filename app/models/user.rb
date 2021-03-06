class User < ApplicationRecord
  has_secure_password
  has_many :blogs, :dependent => :destroy
  has_many :comments, :through => :children

  validates :password, length: { minimum: 6 }
  validates :email, presence: true, uniqueness: true
  validates :username, presence: true, uniqueness: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
end
