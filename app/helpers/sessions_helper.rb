module SessionsHelper
	def current_user
		current_user ||= User.find(session[:user_id]) if session[:user_id]
	end

	def logged_in?
		!!current_user
	end

	def login_user
		session[:user_id] = user.id
	end

	def logout_user
		session[:user_id] = nil
	end	
end
