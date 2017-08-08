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
        <div className="grid-x grid-padding-x" >
          <FormContainer />
        </div>
      </div>
    )
  }
}

export default App;
