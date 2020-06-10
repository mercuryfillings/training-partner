class AddUserReferenceToTechniques < ActiveRecord::Migration[6.0]
  def change
    add_reference :techniques, :user, null: false, foreign_key: true
  end
end
