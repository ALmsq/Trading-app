class CreateCoins < ActiveRecord::Migration[6.0]
  def change
    create_table :coins do |t|
      t.string :name
      t.string :ticker
      t.float :price
      t.integer :rank

      t.timestamps
    end
  end
end
