import { combineReducers } from 'redux'

import counterReducer from './counterReducer'
import calculatorReducer from './calculatorReducer'

export default combineReducers({
  counterStore: counterReducer,
  calculatorStore: calculatorReducer
 })
