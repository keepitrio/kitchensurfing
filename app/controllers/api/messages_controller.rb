class Api::MessagesController < ApplicationController
	include SessionsHelper

  def index
    host_messages = Request.includes(:traveler).where(host_id: current_user.id)
    traveler_messages = Request.includes(:host).where(traveler_id: current_user.id)
    messages = (host_messages + traveler_messages).sort_by {|message| message.created_at}.reverse!
    messages_to_render = []

    messages.each do |message|
      message_hash = {}
      message_hash[:message] = message.message
      if host_messages.include?(message)
        message_hash[:sender] = message.traveler.first_name
        message_hash[:sender_location] = message.traveler.location
        message_hash[:accepted] = message.accepted
      elsif traveler_messages.include?(message)
        message_hash[:sender] = message.host.first_name
        message_hash[:sender_location] = message.host.location
      end
      message_hash[:accepted] = message.accepted
      start_date = message.start_date.strftime('%-m/%-d/%Y') if message.start_date
      end_date = message.end_date.strftime('%-m/%-d/%Y') if message.end_date
      message_hash[:dates] = start_date + " - " + end_date if start_date != nil && end_date != nil
      message_hash[:read] = message.read
      message_hash[:id] = message.id
      message_hash[:sent_time] = ((Time.now - message.created_at)/86400).round.to_s + " days ago"

      messages_to_render << message_hash
    end

    render json: {
      messages_to_render: messages_to_render
    }
  end

  def show
    request = Request.includes(:host, :traveler).find(params[:id])
    messages = request.messages.reverse
    messages_to_render = []
    initial_sent_at = ((Time.now - request.created_at)/86400).round.to_s + " days ago"

    messages.each do |message|
      message_hash = {}
      message_hash[:message] = message.message
      message_hash[:read] = message.read
      if message.user_id == request.host.id
        message_hash[:sender_name] = request.host.first_name
      else
        message_hash[:sender_name] = request.traveler.first_name
      end
      message_hash[:sent_at] = ((Time.now - message.created_at)/86400).round.to_s + " days ago"
      messages_to_render << message_hash
    end

    render json: {
      request_initiator: request.traveler.first_name,
      request: request,
      messages: messages_to_render,
      initial_sent_at: initial_sent_at
    }
  end
end
