class User < ApplicationRecord
	has_secure_password

	validates :email, :first_name, :last_name, :birthday, :city, presence: true
	validates :email, :password, length: { minimum: 1 }
	validates :email, uniqueness: true
end
