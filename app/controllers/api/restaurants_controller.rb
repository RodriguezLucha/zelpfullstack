class Api::RestaurantsController < ApplicationController
  def index
    if style_query.nil?
      @restaurants = Restaurant.with_attached_photos.includes(:styles)
    else
      @restaurants = Restaurant.with_attached_photos.joins(:styles).where('style ILIKE ?', "%#{style_query}%")
    end

    render :index
  end

  def show
    @restaurant = Restaurant.with_attached_photos.includes(:styles).find(params[:id])
    render :show
  end

  def style_query
    params[:style]
  end
end
