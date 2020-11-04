Rails.application.routes.draw do

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      resources :tests
    end
  end
    root 'pages#home'
    get '/start_up', to: 'pages#start_up'
    get '*path', to: 'pages#home', via: :all
end
