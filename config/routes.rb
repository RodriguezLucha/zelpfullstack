Rails.application.routes.draw do
  root to: 'static_pages#root'
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only:[:create, :destroy]
    resources :restaurants, only: [:index, :show]
    resources :reviews, only: [:show, :create, :destroy, :update]
  end
  resources :restaurants, only: :show

end
