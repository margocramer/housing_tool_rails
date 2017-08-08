import React, {Component} from 'react';

class HouseholdSizeField extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }

  render(){
    return(
      <div className="household-size-field">
        <label>{this.props.label}
          <select
            value={this.props.size}
            onChange={this.props.handleChange}
            name={this.props.name}
          >
              <option value="Household Size">Select</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
          </select>
        </label>
      </div>
    )
  }
}

export default HouseholdSizeField;
