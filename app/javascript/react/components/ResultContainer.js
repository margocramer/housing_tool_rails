import React, { Component } from 'react';

class ResultContainer extends Component {

  constructor(props){
    super(props)
    this.state = {
      incomeInfo: null,
      rentInfo: null
    }
  }

  componentDidMount(){
    this.props.updateInfo()
  }

  componentWillUpdate(){
    if ( this.props.info ) {
      this.setState({ incomeInfo: "make that $$$", rentInfo: "ONE MILLION DOLLARS" })
    }
  }

  render(){
    return(
      <div className="result">
        <p>{this.state.incomeInfo}</p>
        <p>{this.state.rentInfo}</p>
      </div>
    )
  }
  }

export default ResultContainer;
