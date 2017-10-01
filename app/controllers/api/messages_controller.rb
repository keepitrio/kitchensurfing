class Api::MessagesController < ApplicationController
	include SessionsHelper

  def index
    host_messages = Request.where(host_id: current_user.id)
    traveler_messages = Request.where(traveler_id: current_user.id)
    messages = host_messages + traveler_messages

    render json: {
      messages: messages
    }
  end

  def show
    request = Request.find(params[:id])
    messages = request.messages

    render json: {
      request: request,
      messages: messages
    }
  end
end
