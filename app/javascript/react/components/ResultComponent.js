import React, {Component} from 'react';
import SearchInput, {createFilter} from 'react-search-input';

class ResultComponent extends Component {
  constructor(props){
    super(props)
    this.state = {
      rentInfo:{}
    }
  }

  componentDidMount(){
    let data={
      income: {
        id: this.props.id,
        rentInfo: {}
      }
    }
    let jsonStringData = JSON.stringify(data);
    fetch('api/v1/unit_rent', {
      method: "post",
      body: jsonStringData
    })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => {
        response.json()
    })
    .then(body => {
      this.setState({rentInfo: body.unit_rent})
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render(){
    return(
      <div>
        <p>hello, world</p>
      </div>
    )
  }
}


export default ResultComponent;

//api post request - in the create method - return json that is filtered by household_income_id which can be passed in as params


// let filteredRent = this.props.rentInfo.filter(createFilter(this.props.id, 'household_income_id'));
// let filteredRentAgain = filteredRent.filter(createFilter(this.props.bedrooms, 'bedrooms'));
// let rent = filteredRentAgain[0]
// <p>{rent.monthly_rent}</p>
