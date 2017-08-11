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
    let filteredFirst = this.props.incomeInfo.filter(createFilter(this.props.income, 'income_max'));
    let filteredSecond = filteredFirst.filter(createFilter(this.props.size, 'household_size'));
    let income = filteredSecond[0]
    return(
        <div>
          <div>
              <p>Income Category:  {income.ami_category}</p>
              <p>% of Area Median Income:  {income.category_name}</p>
          </div>

          <ResultComponent
            income={this.props.income}
            bedrooms={this.props.bedrooms}
            size={this.props.size}
            id={income.id}
          />
        </div>
    )
  }
}

export default ResultContainer;
