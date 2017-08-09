class Api::V1::HouseholdIncomeController < ApiController
  def index
    @household_income = { household_income: HouseholdIncome.all }
    @unit_rent = { unit_rent: UnitRent.all }
    household_income_unit_rent = @household_income.merge(@unit_rent)
    render json: household_income_unit_rent, adapter: :json
  end
end
