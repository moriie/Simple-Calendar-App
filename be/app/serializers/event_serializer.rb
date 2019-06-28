class EventSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :calender_id, :date, :name, :description
end
