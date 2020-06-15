Rails.application.routes.draw do
  post '/api/auth/login', to: 'authentication#login'
  get '/api/auth/verify', to: 'authentication#verify'
  get '/api/techniques/:user_id', to: 'techniques#user_index'
  get '/api/techniques/:user_id/:name', to: 'techniques#user_show'
  get '/api/training_sessions/:user_id', to: 'training_sessions#user_index'
  get '/api/training_sessions/:user_id/:id', to: 'training_sessions#user_show'
  post '/api/techniques/', to: 'techniques#create', as: 'technique'
  # get '/api/users/:id', to: 'users#show'
  post '/api/training_sessions/', to: 'training_sessions#create', as: 'training_session'
  post '/api/users/', to: 'users#create', as: 'user'
  delete '/api/techniques/:id', to: 'techniques#destroy'
  delete '/api/training_session/:id', to: 'training_session#destroy'
  put '/api/techniques/:id', to: 'techniques#update'
  # resources :users
end
