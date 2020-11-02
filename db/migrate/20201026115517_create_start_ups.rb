class CreateStartUps < ActiveRecord::Migration[6.0]
  def change
    create_table :start_ups do |t|
      t.string :Secteur
      t.string :Nom
      t.string :BaseLine
      t.string :Pitch
      t.string :Fondateur1
      t.string :Fondateur2
      t.string :Fondateur3
      t.string :Fondateur4
      t.integer :NombreDeCollaborateurs
      t.string :Email
      t.string :SiteWeb
      t.string :Log

      t.timestamps
    end
  end
end
