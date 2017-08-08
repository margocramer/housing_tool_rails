import React, { Component } from 'react';
import HouseholdSizeForm from './HouseholdSizeForm';
import IncomeForm from './IncomeForm';
import ResultContainer from '../components/ResultContainer';

class FormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      income: null,
      size: null
    };
    this.updateIncome = this.updateIncome.bind(this);
    this.updateSize = this.updateSize.bind(this)
  }

  updateIncome(event){
    this.setState({income: event.target.value})
  }

  updateSize(event){
    this.setState({size: event.target.value})
  }

  render(){
    let form1 = null;
    let form2 = null;
    let result = null;

    if( this.state.size > 0 && this.state.income ) {
      form1 = <HouseholdSizeForm
        updateSize={this.updateSize}
        size={this.state.size}
      />
      form2 = <IncomeForm
        updateIncome={this.updateIncome}
        income={this.state.income}
        size={this.state.size}
      />
      result = <ResultContainer
        income={this.state.income}
        size={this.state.size}
      />
    } else if ( this.state.size === "Household Size" || !this.state.size ){
      form1 = <HouseholdSizeForm
        updateSize={this.updateSize}
        size={this.state.size}
      />
    } else {
      form1 = <HouseholdSizeForm
        updateSize={this.updateSize}
        size={this.state.size}
      />
      form2 = <IncomeForm
        updateIncome={this.updateIncome}
        income={this.state.income}
      />
    }

    return(
      <div>
          {form1}
          {form2}
          {result}
      </div>
    )
  }
}

export default FormContainer;
