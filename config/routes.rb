Rails.application.routes.draw do
  root 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resources :comments, only: [:create, :show, :destroy]
    resources :likes, only: [:create, :show]
    resources :session, only: [:create]
    resources :recipes, only: [:create, :show, :index, :update, :destroy]
    get 'session', to: "session#show"
    delete 'session', to: "session#destroy"
    delete 'likes', to: "likes#destroy"
  end
end
