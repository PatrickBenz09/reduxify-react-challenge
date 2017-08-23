import React, { Component } from 'react'
import { connect } from 'react-redux'

import CounterButton from './CounterButton'

// class CounterPanel extends Component {
//   constructor() {
//     super()
//   }
//   render() {
//     return(
//
//     );
//   }
// }

const CounterPanel = (props) => {
  return(
    <div>
      <h1>{ props.counter }</h1>
      <CounterButton/>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    counter: state.counterStore.counter
  }
}

export default connect(mapStateToProps, null)(CounterPanel)
