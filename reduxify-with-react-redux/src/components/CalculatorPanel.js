import React, { Component } from 'react'
import { connect } from 'react-redux'

import { multiply, change_number1, change_number2 } from '../actions/calculatorAction'

// class Calculator extends Component {
//   constructor (props) {
//     super(props)
//
//   }
//
//   render () {

const Calculator = (props) => {
  return (
    <div>
      <div className="row">
        <div className="col col-xs-4">
          <div className="card" style={{ 'width': '30rem' }}>
            <div className="card-body">
              <h4 className="card-title">Calculator</h4>

              <p className="card-text" id="number1">
                <input type="number" onChange={ (e) => props.changeNumber1(e.target.value) } /> ini { props.number1 }
              </p>

              <p className="card-text" id="operator">
                <button className="btn btn-info" disabled>X</button>
              </p>

              <p className="card-text" id="number2">
                <input type="number" onChange={ (e) => props.changeNumber2(e.target.value) } /> ini { props.number2 }
              </p>

              <button className="btn btn-primary" onClick={ () => props.multiply(props.number1, props.number2) }>Calculate!</button>
            </div>
          </div>
        </div>
        <div className="col col-xs-8">
          <h1>RESULT: </h1>
          <h1>{ props.result }</h1>
        </div>
      </div>
    </div>
  );
  // }
}


const mapStateToProps = (state) => {
  return {
    number1: state.calculatorStore.number1,
    number2: state.calculatorStore.number2,
    result: state.calculatorStore.result
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeNumber1: (num) => dispatch(change_number1(num)),
    changeNumber2: (num) => dispatch(change_number2(num)),
    multiply: (num1, num2) => dispatch(multiply(num1, num2))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Calculator)
