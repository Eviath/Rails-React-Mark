class CreateSocials < ActiveRecord::Migration[6.0]
  def change
    create_table :socials do |t|
      t.string :pagename
      t.string :imageurl
      t.string :pageurl

      t.timestamps
    end
  end
end
