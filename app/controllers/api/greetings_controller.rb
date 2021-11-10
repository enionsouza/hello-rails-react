class Api::GreetingsController < ApplicationController
  def index
    render json: Greeting.all.sample, only: [:message]
  end
end
