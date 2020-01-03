# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_01_03_001638) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "orders", force: :cascade do |t|
    t.integer "orderId"
    t.string "orderNumber"
    t.integer "customerId"
    t.date "orderDate"
    t.date "createDate"
    t.date "shipByDate"
    t.string "sourceOrderStatus"
    t.string "orderStatus"
    t.jsonb "orderInfo"
    t.index ["customerId"], name: "index_orders_on_customerId"
    t.index ["orderId"], name: "index_orders_on_orderId", unique: true
    t.index ["orderInfo"], name: "index_orders_on_orderInfo"
    t.index ["orderNumber"], name: "index_orders_on_orderNumber"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "email", default: "", null: false
    t.string "password_digest"
    t.boolean "admin", default: false, null: false
    t.jsonb "settings", default: "{}", null: false
    t.jsonb "shipping_rules", default: "{}", null: false
    t.jsonb "carrier_setup", default: "{}", null: false
    t.jsonb "api_keys", default: "{}", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["api_keys"], name: "index_users_on_api_keys"
    t.index ["carrier_setup"], name: "index_users_on_carrier_setup"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["settings"], name: "index_users_on_settings"
    t.index ["shipping_rules"], name: "index_users_on_shipping_rules"
  end

end
