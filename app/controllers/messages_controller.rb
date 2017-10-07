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

  def update
    request = Request.find(params[:id])
    request.update(read:true)
    messages = Message.where(request_id: request.id).where(read: false)
    messages.each {|message| message.update(read:true)}
  end

  def show
  end
end
