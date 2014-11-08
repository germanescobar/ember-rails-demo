class SessionsController < ApplicationController
  def create
    user = User.find_by(email: params[:email])
    if user && user.authenticate(params[:password])
      sign_in(user)
      render nothing: true, status: :created
    else
      render nothing: true, status: :unauthorized 
    end
  end
end
