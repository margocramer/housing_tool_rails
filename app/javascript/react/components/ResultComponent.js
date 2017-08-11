import React, {Component} from 'react';
import SearchInput, {createFilter} from 'react-search-input';

class ResultComponent extends Component {
  constructor(props){
    super(props)
    this.state = {
      rentInfo: null,
    }
  }

  componentDidMount(){
    let data={
      income: {
        id: this.props.id,
        bedrooms: this.props.bedrooms,
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
        let errorMessage = '${response.status} (${response.statusText})',
        error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      this.setState({rentInfo: body.unit_rent})
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  componentDidUpdate(){
    let data={
      income: {
        id: this.props.id,
        bedrooms: this.props.bedrooms,
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
        let errorMessage = '${response.status} (${response.statusText})',
        error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      this.setState({rentInfo: body.unit_rent})
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render(){
    if(!this.state.rentInfo){
      return (
        <div>
        </div>
      )
    } else {
      return(
        <div>
          <p>Monthly Rent: ${this.state.rentInfo[0].monthly_rent}</p>
        </div>
      )
    }
  }
}


export default ResultComponent;
