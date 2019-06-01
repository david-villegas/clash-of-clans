class CreateProfiles < ActiveRecord::Migration[5.2]
  def change
    create_table :profiles do |t|
      t.string :bio
      t.date :birthday
      t.string :country
      t.string :clantag
      t.string :clancoc
      t.string :twitter
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
