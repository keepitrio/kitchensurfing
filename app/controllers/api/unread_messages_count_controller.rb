class Api::UnreadMessagesCountController < ApplicationController
  include SessionsHelper

  def index
    requests = Request.where('host_id = ? OR traveler_id = ?', current_user.id, current_user.id)
    request_ids = requests.pluck(:id)
    unread_messages_count = Message.where(request_id: request_ids).where.not(user_id: current_user.id).where(read: false).count

    requests.each do |request|
      if request.host_id == current_user.id && !request.read
        unread_messages_count += 1
      end
    end

    render json: {
      unread_messages_count: unread_messages_count
    }
  end
end

