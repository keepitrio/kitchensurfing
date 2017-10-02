class Api::MessagesController < ApplicationController
	include SessionsHelper

  def index
    host_messages = Request.includes(:traveler).where(host_id: current_user.id)
    traveler_messages = Request.includes(:host).where(traveler_id: current_user.id)
    messages = host_messages + traveler_messages
    messages_to_render = []

    messages.each do |message|
      message_hash = {}
      message_hash[:message] = message.message
      if host_messages.include?(message)
        message_hash[:sender] = message.traveler.first_name
      elsif traveler_messages.include?(message)
        message_hash[:sender] = message.host.first_name
      end
      message_hash[:read] = message.read
      message_hash[:start_date] = message.start_date
      message_hash[:end_date] = message.end_date
      message_hash[:accepted] = message.accepted
      message_hash[:id] = message.id

      messages_to_render << message_hash
    end

    render json: {
      messages_to_render: messages_to_render
    }
  end

  def show
    request = Request.includes(:host, :traveler).find(params[:id])
    messages = request.messages
    messages_to_render = []

    messages.each do |message|
      message_hash = {}
      message_hash[:message] = message.message
      message_hash[:read] = message.read
      if message.user_id == request.host.id
        message_hash[:sender_name] = request.host.first_name
      else
        message_hash[:sender_name] = request.traveler.first_name
      end

      messages_to_render << message_hash
    end

    render json: {
      request_initiator: request.traveler.first_name,
      request: request,
      messages: messages_to_render
    }
  end
end
