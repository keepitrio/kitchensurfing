class Request < ApplicationRecord
  validates :host_id, uniqueness: { scope: :traveler_id }
  belongs_to :host, class_name: "User"
  belongs_to :traveler, class_name: "User"
  has_many :messages
end
