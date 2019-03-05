class Api::RestaurantsController < ApplicationController

  def index
    @restaurants = Restaurant.with_attached_photos.includes(:styles).all
    render :index
  end

  def show
    @restaurant = Restaurant.with_attached_photos.includes(:styles).find(params[:id])
    render :show
  end

end
