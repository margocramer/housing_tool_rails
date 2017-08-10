import React, { Component } from 'react';

class ResultContainer extends Component {

  constructor(props){
    super(props)
    this.state = {
    }
  }

  render(){
    return(
      <div className="result">
        <p>Income Category:{this.props.incomeInfo[0].category_name} </p>
        <p>Monthly Rent:{this.props.rentInfo[0].monthly_rent}</p>
      </div>
    )
  }
  }

export default ResultContainer;
