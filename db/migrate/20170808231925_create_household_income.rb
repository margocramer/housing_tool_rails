class CreateHouseholdIncome < ActiveRecord::Migration[5.1]
  def change
    create_table :household_incomes do |t|
      t.integer :income_max, null: false
      t.integer :household_size, null: false
      t.string :category_name, null: false
      t.string :ami_category, null: false
    end
  end
end
