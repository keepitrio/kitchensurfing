class Api::RequestsController < ApplicationController
  include SessionsHelper

  def create
  end

  def show
    conversation_exists = Request.where(host_id: params[:id],
                                        traveler_id: current_user.id).length > 0 ? true : false
    accepting_guests = User.find(params[:id]).accepting_guests

    render json: {
      conversation_exists: conversation_exists,
      accepting_guests: accepting_guests
    }
  end
end
