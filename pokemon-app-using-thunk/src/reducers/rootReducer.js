import { combineReducers } from 'redux'

import pokeListReducer from './pokeListReducer'

export default combineReducers({
  pokeListStore: pokeListReducer
})
