class RequestsController < ApplicationController
  include SessionsHelper

  def create
    request = Request.new(
      start_date: params[:start_date],
      end_date: params[:end_date],
      message: params[:message],
      host_id: params[:host_id],
      traveler_id: params[:traveler_id],
      accepted: false
    )

    if request.save
      render json: request
    else
      render json:
			{ errors: ["Message could not be sent!"],
				status: 422 }
    end

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
