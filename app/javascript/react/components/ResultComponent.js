import React, {Component} from 'react';
import SearchInput, {createFilter} from 'react-search-input';
import RentResult from './RentResult';

class ResultComponent extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }

  render(){
    let filteredIncome = this.props.incomeInfo.filter(createFilter(this.props.size, 'household_size'))

    return(
      <div>
      {doubleFilteredIncome.map(result=> {
        return (
          <div>
          {result.ami_category}
          <RentResult
            householdIncomeId={result.id}
            rentInfo={this.props.rentInfo}
            bedrooms={this.props.bedrooms}
          />
          </div>
        )
      })}

      </div>
    )
  }
}


export default ResultComponent;
