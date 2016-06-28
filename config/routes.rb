Rails.application.routes.draw do
  root 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resources :session, only: [:create]
    get 'session', to: "session#show"
    delete 'session', to: "session#destroy"
  end
end
