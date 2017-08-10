import React, {Component} from 'react';
import SearchInput, {createFilter} from 'react-search-input';

class RentResult extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }

  render(){
    debugger
    if (this.props.householdIncomeId) {
      let filteredRent = this.props.rentInfo.filter(createFilter(this.props.householdIncomeId, 'household_income_id'))
      let doubleFilteredRent = filteredRent.filter(createFilter("1", 'bedrooms'))
    }


    return(
      <div>
      {doubleFilteredRent.map(result=> {
        return (
          <div className="rent">{result.monthly_rent}</div>
        )
      })}
      </div>
    )
  }
}


export default RentResult;

//should be createFilter(this.props.householdIncomeId, 'househould_income_id'
//should be createFilter(this.props.bedrooms, 'bedrooms')
