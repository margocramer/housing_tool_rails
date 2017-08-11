import React, { Component } from 'react';
import NavBarContainer from './containers/NavBarContainer'
import FormContainer from './containers/FormContainer'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render() {
    return(
      <div>
        <NavBarContainer />
        <FormContainer />
      </div>
    )
  }
}

export default App;
