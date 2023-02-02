import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {getAllPizzaReducer} from './reducer/pizzaReducer';



const rootReducer = combineReducers({
    getAllPizzaReducer:getAllPizzaReducer,

})

const initialState={}

const middleware = [thunk]



const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;