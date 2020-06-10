# frozen_string_literal: true

Rails.application.routes.draw do
  resources :users do
    resources :techniques
    resources :training_sessions
  end
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
end
