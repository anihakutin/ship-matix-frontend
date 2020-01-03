class CreateUserTable < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string    :name
      t.string    :email, null: false, default: ""
      t.string    :password_digest
      t.boolean   :admin, default: false, null: false
      t.jsonb     :settings, null: false, default: '{}'
      t.jsonb     :shipping_rules, null: false, default: '{}'
      t.jsonb     :carrier_setup, null: false, default: '{}'
      t.jsonb     :api_keys, null: false, default: '{}'

      t.timestamps null: false
    end

    add_index :users, :email, unique: true
    add_index :users, :settings
    add_index :users, :shipping_rules
    add_index :users, :carrier_setup
    add_index :users, :api_keys
  end
end
