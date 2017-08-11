import React, { Component } from 'react';
import HouseholdSizeForm from './HouseholdSizeForm';
import IncomeForm from './IncomeForm';
import BedroomsForm from './BedroomsForm';
import ResultContainer from './ResultContainer';

class FormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      income: null,
      size: null,
      bedrooms: null,
      rentInfo: [],
      incomeInfo: []
    };
    this.updateIncome = this.updateIncome.bind(this);
    this.updateSize = this.updateSize.bind(this);
    this.updateBedrooms = this.updateBedrooms.bind(this);
  }

  updateIncome(event){
    this.setState({income: event.target.value})
  }

  updateSize(event){
    this.setState({size: event.target.value})
  }

  updateBedrooms(event){
    this.setState({bedrooms: event.target.value})
  }

  componentDidMount(){
    fetch('/api/v1/household_income')
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = "whoops",
        error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => {
      return response.json()})
    .then(body => {
      this.setState({rentInfo: body.unit_rent, incomeInfo: body.household_income})
    })
  }

  render(){
    let form1 = null;
    let form2 = null;
    let form3 = null;
    let result = null;
    if ( !this.state.bedrooms || !this.state.income || !this.state.size || this.state.bedrooms === "Bedrooms" || this.state.size === "Household Size" || this.state.income === "Income") {
      form1 = <HouseholdSizeForm
        updateSize={this.updateSize}
        size={this.state.size}
      />
      form2 = <IncomeForm
        updateIncome={this.updateIncome}
        income={this.state.income}
        size={this.state.size}
      />
      form3 = <BedroomsForm
        updateBedrooms={this.updateBedrooms}
        income={this.state.income}
        size={this.state.size}
        bedrooms={this.state.bedrooms}
      />
    } else {
      form1 = <HouseholdSizeForm
        updateSize={this.updateSize}
        size={this.state.size}
      />
      form2 = <IncomeForm
        updateIncome={this.updateIncome}
        income={this.state.income}
        size={this.state.size}
      />
      form3 = <BedroomsForm
        updateBedrooms={this.updateBedrooms}
        income={this.state.income}
        size={this.state.size}
        bedrooms={this.state.bedrooms}
      />
      result = <ResultContainer
        income={this.state.income}
        size={this.state.size}
        bedrooms={this.state.bedrooms}
        incomeInfo={this.state.incomeInfo}
      />
    }
    return(
      <div className="row">
        <div className="form-container" className="large-12 medium-12 small-12 columns">
            {form1}
            {form2}
            {form3}
        </div>
        <div className="result-container" className="large-12 medium-12 small-12 columns">
          {result}
        </div>
      </div>
    )
  }
}

export default FormContainer;
