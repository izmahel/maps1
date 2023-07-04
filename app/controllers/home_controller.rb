class HomeController < ApplicationController
  def index
  end
  def sitios
    @sitios = Site.all
    render json: @sitios
  end
end
