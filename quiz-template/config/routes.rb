Rails.application.routes.draw do
  resources :quizzes
  resources :questionnaires, as: "quizzes"
  root to: 'quizzes#index'
end
