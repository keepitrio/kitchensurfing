class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
    	t.string :first_name, null: false
    	t.string :last_name, null: false
    	t.string :email, null: false
    	t.string :password_digest
    	t.string :gender
    	t.string :city, null: false
    	t.date :birthday, null: false
    	t.boolean :accepting_guests

      t.timestamps
    end
  end
end
