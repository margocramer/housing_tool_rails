class CreateUnitRents < ActiveRecord::Migration[5.1]
  def change
    create_table :unit_rents do |t|
      t.string :bedrooms, null: false
      t.integer :monthly_rent, null: false

      t.belongs_to :household_income
    end
  end
end
