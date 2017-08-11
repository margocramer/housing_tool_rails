import React, {Component} from 'react';

class BedroomsField extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }

  render(){
    return(
      <div className="bedrooms-field">
        <label>{this.props.label}
          <select
            value={this.props.bedrooms}
            onChange={this.props.handleChange}
            name={this.props.name}
          >
              <option value="Bedrooms">Select</option>
              <option value="micro">Micro</option>
              <option value="studio">Studio</option>
              <option value="1">1</option>
              <option value="1">1</option>
              <option value="1">1</option>
              <option value="1">1</option>
              <option value="1">1</option>
          </select>
        </label>
      </div>
    )
  }
}

export default BedroomsField;
