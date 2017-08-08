import React, { Component } from 'react';
import IncomeField from '../components/IncomeField'

class IncomeForm extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }

  render() {
    return(
      <div className="household-size-form">
        <IncomeField
          handleChange={this.props.updateIncome}
          income={this.props.income}
          label="Income"
          name="income"
        />
      </div>
    )
  }
}

export default IncomeForm
