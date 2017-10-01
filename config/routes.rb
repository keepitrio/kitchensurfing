Rails.application.routes.draw do

  resources :users, only: [:index, :new, :create, :show, :update]
	resources :auth, only: [:index, :show]
	resources :places, only: [:index]
	resources :requests, only: [:create, :show]
	resources :messages, only: [:index, :create, :show]


	get '/login' => 'sessions#new'
	post '/login' => 'sessions#create'
	get '/logout' => 'sessions#destroy'

	namespace :api, defaults: { format: 'json' } do
		resources :auth, only: [:index, :show]
		resources :requests, only: [:show]
		resources :users, only: [:index]
		resources :messages, only: [:index, :show]
	end

	root to: 'site#index'
end
