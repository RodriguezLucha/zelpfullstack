class Api::ReviewsController < ApplicationController

  def show
    @review = Review.find_by(id: params[:id])
    if @review
       @review
    else
      render json: ['Could not locate review'], status: 400
    end
  end

  def create
    @review = Review.new(review_params)

    @review.user_id = current_user.id
    if @review.save
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def update
    @review = Review.find(params[:id])
    if @review && @review.update_attributes(review_params)
      render :show
    elsif !@review
      render json: ['Could not locate review'], status: 400
    else
      render json: @review.errors.full_messages, status: 401
    end
  end

  def destroy
    @review = Review.find(params[:id])
    @review.destroy
    render json: @review
  end

  def review_params
    params.require(:review).permit(:restaurant_id, :content, :num_stars)
  end


end
