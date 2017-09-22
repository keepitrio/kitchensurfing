class SessionsController < ApplicationController
	include SessionsHelper

	def new
	end

	def create
		user = User.find_by(email: params[:session][:email])

		if user && user.authenticate(params[:session][:password])
			login_user(user)
		else
			render json: { errors: ["incorrect email or password"], status: 422 }
		end
	end

	def destroy
		logout_user
	end

	private
	def sessions_params
		params.require(:session).permit(:email, :session)
	end
end
