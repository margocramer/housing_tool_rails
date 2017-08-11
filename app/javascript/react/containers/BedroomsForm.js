import React, { Component } from 'react';
import BedroomsField from '../components/BedroomsField'

class BedroomsForm extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }

  render(){
    return(
      <div className="bedrooms-form">
        <BedroomsField
          handleChange={this.props.updateBedrooms}
          bedrooms={this.props.bedrooms}
          label="Bedrooms"
          name="bedrooms"
        />
      </div>
    )
  }
}

export default BedroomsForm;
