import {applyMiddleware,compose,legacy_createStore as CreateStore} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './Redux/rootReducer'

const composeEnhancer= window.__REDUX_DEVTOOLS_EXTENTION_COMPOSE__ || compose

const store=CreateStore(
    rootReducer,
    composeEnhancer(applyMiddleware(thunk))
)

export default store