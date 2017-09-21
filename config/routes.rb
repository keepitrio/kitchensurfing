Rails.application.routes.draw do
  get 'hello_world', to: 'hello_world#index'

  resources :users, only: [:new, :create]

	get '/login' => 'sessions#new'
	post '/login' => 'sessions#create'
	get '/logout' => 'sessions#destroy'

	root to: 'site#index'
end
