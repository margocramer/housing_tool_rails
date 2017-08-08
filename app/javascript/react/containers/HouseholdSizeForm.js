import React, { Component } from 'react';
import HouseholdSizeField from '../components/HouseholdSizeField'

class HouseholdSizeForm extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }

  render(){
    return(
      <div className="household-size-form">
        <HouseholdSizeField
          handleChange={this.props.updateSize}
          size={this.props.size}
          label="Household Size"
          name="household-size"
        />
      </div>
    )
  }
}

export default HouseholdSizeForm;
