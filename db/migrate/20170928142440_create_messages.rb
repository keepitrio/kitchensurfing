class CreateMessages < ActiveRecord::Migration[5.1]
  def change
    create_table :messages do |t|
      t.integer :request_id
      t.integer :user_id
      t.text :message
      t.boolean :read

      t.timestamps
    end
  end
end
