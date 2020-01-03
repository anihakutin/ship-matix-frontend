class CreateOrderTable < ActiveRecord::Migration[6.0]
  def change
    create_table :orders do |t|
        t.integer :orderId
        t.string  :orderNumber
        t.integer :customerId
        t.date    :orderDate
        t.date    :createDate
        t.date    :shipByDate
        t.string  :sourceOrderStatus
        t.string  :orderStatus
        t.jsonb   :orderInfo
    end

    add_index :orders, :orderId, unique: true
    add_index :orders, :orderNumber
    add_index :orders, :customerId
    add_index :orders, :orderInfo
  end
end
