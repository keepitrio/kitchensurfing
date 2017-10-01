class MessagesController < ApplicationController
	include SessionsHelper

  def index
  end

  def create
    message = Message.new(
      request_id: params[:request_id],
      user_id: current_user.id,
      message: params[:message],
      read: false
    )

    if message.save
      render json: message
    else
      render json:
			{ errors: ["Message could not be sent!"],
				status: 422 }
    end
  end

  def show
  end
end
