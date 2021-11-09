Rails.application.routes.draw do
  root to: 'home#index'

  namespace :api, constraints: lambda { |req| req.format == :json } do
    resources :greetings, only: [:index]
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
