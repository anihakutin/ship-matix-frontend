module Userable
  extend ActiveSupport::Concern

  def update_shipping_rules
    # byebug
    @user = session_user
    @user.shipping_rules = shipping_settings_params
    if @user.save
      render json: { success: "Shipping rules updated sucessfully", user: UserSerializer.new(@user).as_json}
    else
      render json: { error: "Update Failed" }, status: 400
    end
  end

  def shipping_settings_params
    params
    .require(:shipping_settings)
    .permit(:last_update, :rules =>
      [:carrier_id, :carrier_code, :service_code, :service_name,
        :max_weight, :domestic, :international, :standard,
        :expedited, :next_day, :second_day])
  end
end


  # shipping_settings = [
  #     {"carrier_id": "se-123890", "carrier_code": "stamps_com", "service_code": "usps_priority_mail", "service_name": "USPS Priority Mail", "max_weight": "", "domestic": "true", "international": "false", "standard": "True", "expedited": "True", "next_day": "False", "second_day": "False"},
  #     {"carrier_id": "se-123890", "carrier_code": "stamps_com", "service_code": "usps_first_class_mail", "service_name": "USPS First Class Mail", "max_weight": "", "domestic": "true", "international": "false", "standard": "True", "expedited": "True", "next_day": "False", "second_day": "False"},
  #     {"carrier_id": "", "carrier_code": "", "service_code": "", "service_name": "", "max_weight": "", "domestic": "", "international": "", "standard": "", "expedited": "", "next_day": "", "second_day": ""}
  # ]

  # shipping_settings.select do |hash| # or use select!
  #   filter.all? do |key, value|
  #     value == hash[key]
  #   end
  # end
  # if settings[0]["Service"] == "True"
  # if settings[0]["Standard"] == "False"
  #
  # service = order.service
  # case service
  # when "Standard"
  #   get_cheapest_service(service)
  # when "Expedited"
  #   puts service
  # when "NextDay"
  #   puts service
  # when "TwoDay"
  #   puts service
  # end


  # Shipengine response
  #   [
  #   {
  #     "rate_type": "check",
  #     "carrier_id": "se-123890",
  #     "shipping_amount": {
  #       "currency": "usd",
  #       "amount": 0.46
  #     },
  #     "insurance_amount": {
  #       "currency": "usd",
  #       "amount": 0.0
  #     },
  #     "confirmation_amount": {
  #       "currency": "usd",
  #       "amount": 0.0
  #     },
  #     "other_amount": {
  #       "currency": "usd",
  #       "amount": 0.0
  #     },
  #     "zone": 6,
  #     "package_type": "letter",
  #     "delivery_days": 3,
  #     "guaranteed_service": false,
  #     "estimated_delivery_date": "2019-07-25T05:00:00.000Z",
  #     "carrier_delivery_days": "3",
  #     "ship_date": "2019-07-25T05:00:00.000ZPlus3$",
  #     "negotiated_rate": false,
  #     "service_type": "USPS First Class Mail",
  #     "service_code": "usps_first_class_mail",
  #     "trackable": true,
  #     "validation_status": "unknown",
  #     "warning_messages": [],
  #     "error_messages": [],
  #     "carrier_code": "stamps_com",
  #     "carrier_nickname": "Free",
  #     "carrier_friendly_name": "Stamps.com"
  #   }
  # ]
