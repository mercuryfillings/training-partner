# frozen_string_literal: true

Rails.application.routes.draw do
  
  post '/api/auth/login', to: 'authentication#login'
  get '/api/auth/verify', to: 'authentication#verify'
  get '/api/techniques/:user_id', to: 'techniques#user_index'
  get '/api/techniques/:user_id/:name', to: 'techniques#user_show'
  get '/api/training_sessions/:user_id', to: 'training_sessions#user_index'
  get '/api/training_sessions/:user_id/:id', to: 'training_sessions#user_show'
  get '/api/users/:id', to: 'users#show'
  post '/api/tecniques/', to: 'techniques#create'
    
  
end
