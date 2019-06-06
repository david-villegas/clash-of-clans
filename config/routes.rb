Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'mainpage#index'
  devise_for :users, path: 'accounts'
  resources :profiles, only: [:new, :create, :show, :edit, :update]
  resources :articles, path: 'blog' do
    resources :comments, only: [:create]
    collection do
      get :search, to: 'articles#search'
    end
  end
  get 'calculator', to: 'mainpage#calculator'
  get 'rules', to: 'mainpage#rules'
  get 'api', to: 'apis#index'
  get 'my-posts', to: 'articles#myposts'

end
