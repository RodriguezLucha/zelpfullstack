class Api::RestaurantsController < ApplicationController

  def index
    @restaurants = Restaurant.with_attached_photos.all
    render :index
  end

  def show
    @restaurant = Restaurant.with_attached_photos.find(params[:id])
    render :show
  end

end
