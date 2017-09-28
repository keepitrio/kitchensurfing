Rails.application.routes.draw do

  resources :users, only: [:index, :new, :create, :show, :update]
	resources :auth, only: [:index, :show]
	resources :places, only: [:index]
	resources :requests, only: [:create]

	get '/login' => 'sessions#new'
	post '/login' => 'sessions#create'
	get '/logout' => 'sessions#destroy'

	root to: 'site#index'
end
