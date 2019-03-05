class Api::RestaurantsController < ApplicationController
  def index

    puts "The style is: >>>>>>#{style_name}<<<<<<<"
    if style_name.nil?
      @restaurants = Restaurant.with_attached_photos.includes(:styles)
    else
      #@restaurants = Restaurant.with_attached_photos.joins(:styles).where(:styles => {style: style})
      @restaurants = Restaurant.with_attached_photos.joins(:styles).where('style ILIKE ?', "%#{style_name}%")
      #where(title.matches("%#{query}%"))
      #Foo.where("bar ILIKE ?", "%#{query}%") 
    end

    render :index
  end

  def show
    @restaurant = Restaurant.with_attached_photos.includes(:styles).find(params[:id])
    render :show
  end

  def style_name
    params[:style_name]
  end
end
