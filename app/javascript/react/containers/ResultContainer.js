import React, { Component } from 'react';
import SearchInput, {createFilter} from 'react-search-input';
import ResultComponent from '../components/ResultComponent'

class ResultContainer extends Component {

  constructor(props){
    super(props)
    this.state = {
    }
  }

  render(){
    let filteredIncome = this.props.incomeInfo.filter(createFilter(this.props.size, 'household_size'))
    return(
      <div>
        {filteredIncome.map(income=> {
          if ( true ) {
            return(
              <p>{income.ami_category}</p>
            )
          }
        })}
      </div>
    )
  }
}

export default ResultContainer;

// <ResultComponent
//   size={this.props.size}
//   income={this.props.incom}
//   householdIncomeId={result.househould_income_id}
// />
