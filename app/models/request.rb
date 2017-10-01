class Request < ApplicationRecord
  validates :host_id, uniqueness: { scope: :traveler_id }
  has_many :messages
end
