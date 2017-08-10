Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'unit_rents#index'
  resources :unit_rents, only: [:show]

  namespace :api do
    namespace :v1 do
      resources :household_income, only: [:index]
      resources :unit_rent, only: [:create]
    end
  end
end
