class Api::RestaurantsController < ApplicationController
  def index
    if !term_set
      @restaurants = Restaurant.with_attached_photos.includes(:styles)
    else
      condition = []
      args = []

      #TODO: Implement category buttons
      condition.push('style ILIKE ?')
      args.push("%#{term_query}%")
      condition.push('name ILIKE ?')
      args.push("%#{term_query}%")
      @restaurants = Restaurant.with_attached_photos.joins(:styles).where(condition.join(' OR '), *args)
      
    end

    render :index
  end

  def show
    @restaurant = Restaurant.with_attached_photos.includes(:styles).find(params[:id])
    render :show
  end

  private

  def term_set
    if  term_query
      return true
    else
      return false
    end
  end

  def term_query
    params[:term]
  end

end
