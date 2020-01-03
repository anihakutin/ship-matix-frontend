class CreateOrderTable < ActiveRecord::Migration[6.0]
  def change
    create_table :orders do |t|
        t.integer :order_id
        t.string  :order_number
        t.integer :user_id
        t.date    :order_date
        t.date    :create_date
        t.date    :ship_by_date
        t.string  :source_order_status
        t.string  :order_status
        t.jsonb   :order_info
    end

    add_index :orders, :order_id, unique: true
    add_index :orders, :order_number
    add_index :orders, :user_id
    add_index :orders, :order_info
  end
end
