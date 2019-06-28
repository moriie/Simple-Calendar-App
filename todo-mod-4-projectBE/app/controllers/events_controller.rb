class EventsController < ApplicationController

  def index
    @events = Event.all
    render json: @events
  end

  def create
    user = User.find(1)
    cal = Calender.find(1)
    name = params[:name]
    nEvent = Event.create(user: user, calender: cal, date: params[:date], name: name)
    render json: nEvent
  end

  def destroy
    # Event.destroy
  end

  private
  def pokemon_params
    params.require(:event).permit(:calender_id, :date, :user_id, :name)
  end
end
