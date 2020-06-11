# frozen_string_literal: true

Rails.application.routes.draw do
  resources :users do
    get '/users/:id', to: 'users#show'
    # get '/users/:id/techniques/', to: 'techniques#index'
    # get '/users/:id/techniques/:name', to: 'techniques#show'
  end
  # resources :techniques
  resources :training_sessions
  # resources :techniques do
    
  # end

  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  # get '/techniques/', to: 'techniques#index'
  get '/techniques/:user_id', to: 'techniques#user_index'
  get '/techniques/:user_id/:name', to: 'techniques#user_show'
  
  
end
