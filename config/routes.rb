Rails.application.routes.draw do

  resources :users, only: [:new, :create, :show]
	resources :auth, only: [:index]

	get '/login' => 'sessions#new'
	post '/login' => 'sessions#create'
	get '/logout' => 'sessions#destroy'

	root to: 'site#index'
end
