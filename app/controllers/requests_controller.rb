class RequestsController < ApplicationController
  include SessionsHelper

  def create
    request = Request.new(
      start_date: params[:start_date],
      end_date: params[:end_date],
      message: params[:message],
      host_id: params[:host_id],
      traveler_id: params[:traveler_id],
      accepted: false,
      read: false
    )

    if request.save
      render json: request
    else
      render json:
			{ errors: ["Message could not be sent!"],
				status: 422 }
    end

  end

  def update
    request = Request.find(params[:id])
    request.toggle(:accepted)

    render json: request
  end
end
