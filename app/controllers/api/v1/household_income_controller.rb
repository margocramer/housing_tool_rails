class Api::V1::HouseholdIncomeController < ApiController
  def index
    @household_income = { household_income: HouseholdIncome.all }
    @unit_rent = { unit_rent: UnitRent.all }

    render json: @household_income.merge(@unit_rent), adapter: :json
  end

  def create
    
  end

end

# @household_income = { household_income: HouseholdIncome.where("income_max = ?", params[:income]) }
# @unit_rents = { unit_rent: UnitRent.where("household_income = ? AND bedrooms = ?", params[:household_income], params[:bedrooms]) }
# household_income_unit_rent = @household_income.merge(@unit_rent)
# render json: household_income_unit_rent, adapter: :json

# @household_income = { household_income: HouseholdIncome.all }
# @unit_rents = { unit_rent: UnitRent.all }
# @household_income_unit_rent = @household_income.merge(@unit_rent)
# render json: @household_income_unit_rent, adapter: :json
