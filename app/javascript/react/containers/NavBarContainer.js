import React, { Component } from 'react';
import NavBar from '../components/NavBar'

class NavBarContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
    }

  }


  render(){
    return(
      <div className="nav-bar-container">
        <NavBar
        />
      </div>
    )
  }
}

export default NavBarContainer;
