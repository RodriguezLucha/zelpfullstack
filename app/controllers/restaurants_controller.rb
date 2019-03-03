class RestaurantsController < ApplicationController

  def show
    @restaurant = Restaurant.find(params[:id])
    render :show
  end

end
