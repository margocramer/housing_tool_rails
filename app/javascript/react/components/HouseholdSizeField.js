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
              <option value="1">2</option>
              <option value="1">3</option>
              <option value="1">4</option>
              <option value="1">5</option>
          </select>
        </label>
      </div>
    )
  }
}

export default HouseholdSizeField;
