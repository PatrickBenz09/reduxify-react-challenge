import React, { Component } from 'react'

import CounterPanel from './CounterPanel'
import Calculator from './CalculatorPanel'

class Main extends Component {
  render() {
    return(
      <div>
        <div className="alert alert-primary" role="alert">
          Learning React-Redux from scratch!
        </div>

        <div className="container">
          <button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseCounter" aria-expanded="false" aria-controls="collapseCounter" style={{ 'margin-bottom': '10px' }}>Counter</button>
          <div className="collapse" id="collapseCounter">
            <CounterPanel></CounterPanel>
          </div>
          <hr/>
        </div>

        <button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseCalculator" aria-expanded="false" aria-controls="collapseCalculator" style={{ 'margin-bottom': '10px' }}>Calculator</button>
        <div className="collapse" id="collapseCalculator" style={{ margin: 'auto 20px' }}>
          <Calculator></Calculator>
        </div>
      </div>
    );
  }
}

export default Main
