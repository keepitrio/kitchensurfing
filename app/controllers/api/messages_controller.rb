class Api::MessagesController < ApplicationController
	include SessionsHelper

  def index
  end

  def show
    messages = Message.where(request_id: params[:id])
  end
end
