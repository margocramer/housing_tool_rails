# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

HouseholdIncome.create!(income_max: 21700, household_size: 1, category_name: "30%", ami_category: "extremely low income")
HouseholdIncome.create!(income_max: 36200, household_size: 1, category_name: "50%", ami_category: "very low income")
HouseholdIncome.create!(income_max: 43450, household_size: 1, category_name: "60%", ami_category: "very low income")
HouseholdIncome.create!(income_max: 50700, household_size: 1, category_name: "70%", ami_category: "low income")
HouseholdIncome.create!(income_max: 57900, household_size: 1, category_name: "80%", ami_category: "low income")
HouseholdIncome.create!(income_max: 72400, household_size: 1, category_name: "100%", ami_category: "middle income")
HouseholdIncome.create!(income_max: 86900, household_size: 1, category_name: "120%", ami_category: "middle income")


UnitRent.create!(household_income: HouseholdIncome.first, bedrooms:"micro" , monthly_rent:418)
UnitRent.create!(household_income: HouseholdIncome.first, bedrooms:"studio" , monthly_rent:465)
UnitRent.create!(household_income: HouseholdIncome.first, bedrooms:"1" , monthly_rent:542)
UnitRent.create!(household_income: HouseholdIncome.second, bedrooms:"micro" , monthly_rent:698)
UnitRent.create!(household_income: HouseholdIncome.second, bedrooms:"studio", monthly_rent:776)
UnitRent.create!(household_income: HouseholdIncome.second, bedrooms:"1", monthly_rent:905)
UnitRent.create!(household_income: HouseholdIncome.third, bedrooms:"micro", monthly_rent:837)
UnitRent.create!(household_income: HouseholdIncome.third, bedrooms:"studio", monthly_rent:931)
UnitRent.create!(household_income: HouseholdIncome.third, bedrooms:"1", monthly_rent:1086)
UnitRent.create!(household_income: HouseholdIncome.fourth, bedrooms:"micro", monthly_rent:997)
UnitRent.create!(household_income: HouseholdIncome.fourth, bedrooms:"studio", monthly_rent:1086)
UnitRent.create!(household_income: HouseholdIncome.fourth, bedrooms:"1", monthly_rent:1267)
UnitRent.create!(household_income: HouseholdIncome.find(5), bedrooms:"micro", monthly_rent:1116)
UnitRent.create!(household_income: HouseholdIncome.find(5), bedrooms:"studio", monthly_rent:1241)
UnitRent.create!(household_income: HouseholdIncome.find(5), bedrooms:"1", monthly_rent:1447)
UnitRent.create!(household_income: HouseholdIncome.find(6), bedrooms:"micro", monthly_rent:1395)
UnitRent.create!(household_income: HouseholdIncome.find(6), bedrooms:"studio", monthly_rent:1551)
UnitRent.create!(household_income: HouseholdIncome.find(6), bedrooms:"1", monthly_rent:1810)
UnitRent.create!(household_income: HouseholdIncome.find(7), bedrooms:"micro", monthly_rent:1675)
UnitRent.create!(household_income: HouseholdIncome.find(7), bedrooms:"studio", monthly_rent:1862)
UnitRent.create!(household_income: HouseholdIncome.find(7), bedrooms:"1", monthly_rent:2172)
