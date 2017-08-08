import React from 'react';

const IncomeField = (props) => {
  return(
    <div className="income-field">
      <label>{props.label}
        <input
          type="text"
          onChange={props.handleChange}
          name={props.name}
          value={props.income}/>
      </label>
    </div>
  )
}

export default IncomeField
