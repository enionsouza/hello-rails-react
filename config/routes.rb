Rails.application.routes.draw do
  root to: 'home#index'

  namespace :api, constraints: ->(req) { req.format == :json } do
    resources :greetings, only: [:index]
  end

  get '*page', to: 'home#index', constraints: ->(req) { !req.xhr? && req.format.html? }
end
