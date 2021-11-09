import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import logger from 'redux-logger';
import greetingReducer from './greetings/greetings';

const reducer = combineReducers({
  greeting: greetingReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
