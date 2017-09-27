class AuthController < ApplicationController
	include SessionsHelper
	
	def index
		render json: current_user
	end
end