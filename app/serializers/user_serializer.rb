class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :admin, :settings, :shipping_rules, :carrier_setup
  has_many :orders
end
