class CreateRequests < ActiveRecord::Migration[5.1]
  def change
    create_table :requests do |t|
      t.date :start_date
      t.date :end_date
      t.text :message
      t.integer :host_id
      t.integer :traveler_id
      t.boolean :accepted
      t.boolean :read

      t.timestamps
    end
  end
end
