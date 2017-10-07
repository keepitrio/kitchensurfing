Rails.application.routes.draw do

  resources :users, only: [:index, :new, :create, :show, :update]
	resources :auth, only: [:index, :show]
	resources :places, only: [:index]
	resources :requests, only: [:create, :show, :update]
	resources :messages, only: [:index, :create, :show, :update]


	get '/login' => 'sessions#new'
	post '/login' => 'sessions#create'
	get '/logout' => 'sessions#destroy'

	namespace :api, defaults: { format: 'json' } do
		resources :auth, only: [:index, :show]
		resources :requests, only: [:index, :show]
		resources :users, only: [:index, :show]
		resources :unread_messages_count, only: [:index]
		resources :messages, only: [:index, :show]
	end

	root to: 'site#index'
end
