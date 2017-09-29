class Message < ApplicationRecord
  belongs_to :user, :request
end
