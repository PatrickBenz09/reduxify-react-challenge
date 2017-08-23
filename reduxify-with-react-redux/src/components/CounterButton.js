import React from 'react'
import { connect } from 'react-redux'

import { increment, decrement, change_num_of_step } from '../actions/counterAction'

const CounterButton = (props) => {
  return(
    <div>
      <h1>Counter from store: { props.counter }</h1>
      <h1>StepNum from Store: { props.numOfStep }</h1>
      Adder: <input onChange={ (e) => props.changeNumOfStep(e.target.value) } type="number"/>
      <button onClick={ () => props.increment(props.numOfStep) }>Increment++</button>
      <button onClick={ () => props.decrement(props.numOfStep) }>Decrement--</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    counter: state.counterStore.counter,
    numOfStep: state.counterStore.numOfStep
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment:       (numOfStep) => dispatch(increment(numOfStep)),
    decrement:       (numOfStep) => dispatch(decrement(numOfStep)),
    changeNumOfStep: (numOfStep) => dispatch(change_num_of_step(numOfStep))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterButton)
