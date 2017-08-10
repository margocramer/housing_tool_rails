class Api::V1::UnitRentController < ApiController
  skip_before_action :verify_authenticity_token

  def create
    string = request.body.read
    id_hash = JSON.parse(string)
    id = id["income"]["id"]
    @unit_rent = { unit_rent: UnitRent.where(household_income_id: id) }
    render json: @unit_rent, adapter: :json
  end
end
