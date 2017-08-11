import React from 'react';

const IncomeField = (props) => {
  return(
    <div className="income-field" >
      <label>{props.label}
        <select
          onChange={props.handleChange}
          name={props.name}
          value={props.income}
        >
          <option value="Income">Select</option>
          <option value="21700">below $21,000</option>
          <option value="36200">below $36,200</option>
          <option value="43450">below $43,450</option>
          <option value="50700">below $50,700</option>
          <option value="57900">below $57,900</option>
          <option value="72400">below $72,400</option>
          <option value="86900">below $86,900</option>

        </select>
      </label>
    </div>
  )
}

export default IncomeField
