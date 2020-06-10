class CreateTrainingSessions < ActiveRecord::Migration[6.0]
  def change
    create_table :training_sessions do |t|
      t.integer :rolls
      t.integer :opponents
      t.integer :subs
      t.integer :taps

      t.timestamps
    end
  end
end
