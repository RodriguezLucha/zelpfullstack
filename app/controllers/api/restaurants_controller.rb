class Api::RestaurantsController < ApplicationController
  def index
    if !query_set
      @restaurants = Restaurant.with_attached_photos.includes(:styles)
    else
      condition = []
      args = []

      if style_query
        condition.push('style ILIKE ?')
        args.push("%#{style_query}%")
      end

      if name_query
        condition.push('name ILIKE ?')
        args.push("%#{name_query}%")
      end
      @restaurants = Restaurant.with_attached_photos.joins(:styles).where(condition.join(' OR '), *args)
    end

    render :index
  end

  def show
    @restaurant = Restaurant.with_attached_photos.includes(:styles).find(params[:id])
    render :show
  end

  private

  def query_set
    if style_query || name_query
      return true
    else
      return false
    end
  end

  def style_query
    params[:style]
  end

  def name_query
    params[:name]
  end
end
