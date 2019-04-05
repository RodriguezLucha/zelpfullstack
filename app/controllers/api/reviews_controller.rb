class Api::ReviewsController < ApplicationController
  def create
    #Current user and Current restaurant
    @review = Review.new(review_params)

    @review.user_id = current_user.id
    if @review.save
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def update
    #Review ID and new Content
  end

  def destroy
    #Review ID
    @review = Like.find(params[:id])
    @review.destroy
    redirect_to chirp_url(@review.restaurant_id)
  end

  def review_params
    params.require(:review).permit(:restaurant_id, :content, :num_stars)
  end


end
