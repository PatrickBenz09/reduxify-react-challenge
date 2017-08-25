import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import rootReducer from '../reducers/rootReducer'

const middleware = applyMiddleware(logger, thunk)

//createStore(reducer, defaultState, enhancer/middleware)
export default createStore(rootReducer, middleware)
