class PostsController < ApplicationController
  before_action :private_access
  respond_to :json

  def index
    respond_with Post.all
  end

  def create
    respond_with Post.create(post_params)
  end

  private
    def post_params
      params.require(:post).permit(:title, :body)
    end
end
