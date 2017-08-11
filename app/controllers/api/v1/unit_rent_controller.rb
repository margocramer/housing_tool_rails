class Api::V1::UnitRentController < ApiController
  skip_before_action :verify_authenticity_token

  def create
    string = request.body.read
    hash = JSON.parse(string)
    id= hash["income"]["id"]
    bedrooms = hash["income"]["bedrooms"]
    @unit_rent = { unit_rent: UnitRent.where(household_income_id: id, bedrooms: bedrooms) }
    render json: @unit_rent, adapter: :json
  end
end
