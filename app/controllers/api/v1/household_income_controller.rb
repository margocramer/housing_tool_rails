class Api::V1::HouseholdIncomeController < ApiController
  def index
    @household_income = { household_income: HouseholdIncome.all }
    @unit_rent = { unit_rent: UnitRent.all }

    render json: @household_income.merge(@unit_rent), adapter: :json
  end

  def create

  end

end
