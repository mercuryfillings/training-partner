class CreateTechniques < ActiveRecord::Migration[6.0]
  def change
    create_table :techniques do |t|
      t.string :name
      t.string :category
      t.string :position
      t.string :orientation
      t.integer :times_executed

      t.timestamps
    end
  end
end
