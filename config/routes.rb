Rails.application.routes.draw do
  devise_for :user
  namespace :api do
    namespace :v1 do
      get 'recipes/index'
      resources :recipes, except: [:new, :edit]
    end
  end

  
  root 'homepage#index'
  get '/*path' => 'homepage#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end