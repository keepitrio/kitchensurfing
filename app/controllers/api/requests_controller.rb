class Api::RequestsController < ApplicationController
  include SessionsHelper

  def index
    if params[:type] === "trips"
      requests = Request.includes(:host).where(traveler_id: current_user.id, accepted: true).where("start_date > ?", Date.today)
      trips = []

      requests.each do |request|
        trip_hash = {}
        trip_hash[:id] = request.id
        trip_hash[:host] = request.host.first_name + " " + request.host.last_name
        trip_hash[:location] = request.host.location
        trip_hash[:start_date] = request.start_date.strftime('%-m/%-d/%Y')
        trip_hash[:end_date] = request.end_date.strftime('%-m/%-d/%Y')
        trips << trip_hash
      end

      render json: {
        trips: trips,
      }
    elsif params[:type] === "hosting"
      requests = Request.includes(:traveler).where(host_id: current_user.id, accepted: true).where("start_date > ?", Date.today)
      hosting = []

      requests.each do |request|
        hosting_hash = {}
        hosting_hash[:id] = request.id
        hosting_hash[:traveler] = request.traveler.first_name + " " + request.traveler.last_name
        hosting_hash[:location] = request.traveler.location
        hosting_hash[:start_date] = request.start_date.strftime('%-m/%-d/%Y')
        hosting_hash[:end_date] = request.end_date.strftime('%-m/%-d/%Y')
        hosting << hosting_hash
      end

      render json: {
        hosting: hosting
      }
    end
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
