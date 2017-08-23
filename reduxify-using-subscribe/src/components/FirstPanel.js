import React, { Component } from 'react'

import Store from '../stores'
import { increment, decrement } from '../actions/rootAction'

class FirstPanel extends Component {
  constructor() {
    super()
    this.state = {
      _counter: 0
    }

    Store.subscribe(this.updateCounter)
  }

  updateCounter = () => {
    this.setState({ _counter: Store.getState().counter })
  }

  render() {
    return(
      <div>
        <h1>{ this.state._counter }</h1>
        <input type="number"/>
        <button onClick={ () => Store.dispatch(increment) }>Increment++</button>
        <button onClick={ () => Store.dispatch(decrement) }>Decrement--</button>
      </div>
    );
  }
}

export default FirstPanel
