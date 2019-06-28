class CalendersController < ApplicationController

    def index
      @cals = Calender.all
      render json: @cals
    end
  
    def create
      calName = params[:name]
      nCal = Calender.create(name: calName)
      render json: nCal
    end
  
    def destroy
      # Event.destroy
    end
  
  end
  