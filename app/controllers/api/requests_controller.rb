class Api::RequestsController < ApplicationController
  include SessionsHelper

  def create
  end

  def show
    request = Request.find_by(host_id: params[:id], traveler_id: current_user.id)
    conversation_exists = request ? true : false
    accepting_guests = User.find(params[:id]).accepting_guests

    render json: {
      request: request,
      conversation_exists: conversation_exists,
      accepting_guests: accepting_guests
    }
  end
end
