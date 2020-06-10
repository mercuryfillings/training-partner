Rails.application.routes.draw do
  resources :users do
    resources :techniques
    resources :training_sessions
  end
end
