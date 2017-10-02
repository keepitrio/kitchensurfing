class Api::UsersController < ApplicationController
  include SessionsHelper

  def index
    if params[:search]
			users = User.where(location: params[:search]).where(accepting_guests: true) +
			User.where(location: params[:search]).where(accepting_guests: nil)
    else
			users = User.where(location: current_user).where(accepting_guests: true) +
			User.where(location: current_user).where(accepting_guests: nil)
    end

    render json: users
  end

  def show
    if params[:host_id].to_i == current_user.id
      user = User.find(params[:traveler_id])
    elsif params[:traveler_id].to_i == current_user.id
      user = User.find(params[:host_id])
    end

    render json: user
  end
end
