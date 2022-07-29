Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'

  root to: 'pages#home'

  resources :contacts, only: [:new, :create]

  resources :notifications, only: :index do
    collection do
      get 'checked'
    end
  end

  resources :posts do
    resources :comments, only: [:create, :destroy]
    resource :likes, only: [:create, :destroy]
    resource :remembers, only: [:create, :destroy]
    member do
      get 'action_user'
    end
  end

  devise_for :admin_users, controllers: {
    sessions: 'admin_users/sessions',
  }

  devise_for :users, controllers: {
    registrations: 'users/registrations',
    passwords: 'users/passwords',
  }

  devise_scope :user do
    post 'users/guest_sign_in', to: 'users/sessions#new_guest' # ゲストユーザー機能
    get 'users/show' # 自分の詳細画面
    get 'users/:name', to: 'users#profile', as: 'users/profile' # 他ユーザーの詳細画面
    post 'users/show', to: 'users#update' # アイコン変更
  end

  get 'searches/result'
  get 'home', to: 'pages#home'
  get 'about', to: 'pages#about'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
