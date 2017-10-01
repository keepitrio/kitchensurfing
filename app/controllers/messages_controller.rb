class MessagesController < ApplicationController
	include SessionsHelper

  def index
  end

  def create
    message = Message.new(
      request_id: params[:request_id],
      user_id: params[:user_id],
      message: params[:message]
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
