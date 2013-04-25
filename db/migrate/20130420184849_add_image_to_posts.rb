class AddImageToPosts < ActiveRecord::Migration
  def change
    add_column :posts, :Image, :string
  end
end
