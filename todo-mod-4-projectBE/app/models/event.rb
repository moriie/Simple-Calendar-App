class Event < ApplicationRecord
  belongs_to :user
  belongs_to :calender
validates :name, length: {minimum:3, maximum:15 }
end
