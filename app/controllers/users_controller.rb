class UsersController < ApplicationController
	def new
	end

	def create
		user = User.new(
			first_name: params[:first_name],
			last_name: params[:last_name],
			email: params[:email],
			password: params[:password],
			gender: params[:gender],
			birthday: Date.parse(params[:birthday]),
			city: params[:city]
		)

		if user.save
			render json: user
		else
			render json:
			{ errors: ["Sign up failed!"],
				status: 422 }
		end
	end
end
