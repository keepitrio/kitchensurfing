class Api::AuthController < ApplicationController
	include SessionsHelper

	# render JSON user object for logged in user
	def index
		render json: current_user
	end

	# render JSON user object for user profile that's not logged in
	def show
		render json: User.find(params[:id])
	end
end
