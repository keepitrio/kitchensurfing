class Api::RequestsController < ApplicationController
  include SessionsHelper

  def create
  end

  def show
    host_messages = Request.where(host_id: current_user.id)
    traveler_messages = Request.where(traveler_id: current_user.id)
    messages = host_messages + traveler_messages

    conversation_exists = Request.where(host_id: params[:id],
                                        traveler_id: current_user.id) ? true : false

    render json: {
      messages: messages,
      conversation_exists: conversation_exists
    }
  end
end
