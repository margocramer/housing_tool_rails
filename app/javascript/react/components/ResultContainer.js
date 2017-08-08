import React, { Component } from 'react';

class ResultContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }

  render(){
    let result = '/chart.png';

    if ( this.props.size > 2 && this.props.income > 30000 ) {
      result = '/chart.png'
    } else {
      result = 'http://demandware.edgesuite.net/sits_pod32/dw/image/v2/BBBW_PRD/on/demandware.static/-/Sites-jss-master/default/dw625729c3/images/products/flowers/01712_01_procutorange.jpg?sw=1120'
    }

    return(
      <div className="result">
        <img src={result} />
      </div>
    )
  }
}

export default ResultContainer;
