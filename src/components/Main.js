import React, { Component } from 'react'

import FirstPanel from './FirstPanel'

class Main extends Component {
  render() {
    return(
      <div>
        <div className="alert alert-primary" role="alert">
          Learning Redux from scratch!
        </div>
        <div className="container">
          <FirstPanel></FirstPanel>
        </div>
      </div>
    );
  }
}

export default Main