Rails.application.routes.draw do

  devise_for :users, controllers: { registrations: 'registrations', sessions: 'sessions' }

  namespace :admin do
    resources :socials, only: [:create, :update, :destroy]
  end

  get '/admin/*page', to: 'admin#index', constraints: ->(req) do
    !req.xhr? && req.format.html?
  end

  get '/admin', to: 'admin#index', constraints: ->(req) do
    !req.xhr? && req.format.html?
  end

  namespace :v1, defaults: { format: 'json' } do
    get 'socials', to: 'socials#index'
    get 'social/:id', to: 'socials#show'
    get 'users/current', to: 'users#current'
  end

  # Forward all requests to StaticController#index but requests
  # must be non-Ajax (!req.xhr?) and HTML Mime type (req.format.html?).
  # This does not include the root ("/") path.
  get '*page', to: 'static#index', constraints: ->(req) do
    !req.xhr? && req.format.html?
  end


  # Forward root to StaticController#index
  root 'static#index'


end
