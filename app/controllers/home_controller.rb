class HomeController < ApplicationController
  def index
  	@latest_posts = Post.all  	
  end
end
