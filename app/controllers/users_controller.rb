class UsersController < ApplicationController
	include SessionsHelper
	
	def new
	end

	def create
		user = User.new(
			first_name: params[:first_name].capitalize,
			last_name: params[:last_name].capitalize,
			email: params[:email],
			password: params[:password],
			location: params[:location]
		)

		if user.save
			login_user(user)
			render json: user
		else
			render json:
			{ errors: ["Sign up failed!"],
				status: 422 }
		end
	end
end
