class UsersController < ApplicationController
	include SessionsHelper
	def index
		if params[:search]
			users = User.where(location: params[:search]).where(accepting_guests: true) +
			User.where(location: params[:search]).where(accepting_guests: nil)
    else
			users = User.where(location: current_user).where(accepting_guests: true) +
			User.where(location: current_user).where(accepting_guests: nil)
    end

    render json: users
	end

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

	def update
		string_to_boolean = { "true"=>true, "false"=>false, "null"=>nil }
		if logged_in?
			current_user.update_attribute(:accepting_guests, string_to_boolean[params[:accepting_guests]])
		end
	end
end
