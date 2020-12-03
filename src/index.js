import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';


const userReducer = (state={}, action) => {
  switch(action.type){
    default:
      return state
    }
  }
  //reducers take state and action and body is switch statement
const charactersReducer = (state=[], action) => {
  switch(action.type){
  case 'SET_CHARACTERS':
    return action.payload
  case 'ADD_CHARACTER':
    return [...state, action.character]
  default: 
    return state
  }
}

const reducer = combineReducers({
  user: userReducer,
  characters: charactersReducer
})
//takes in a reducer
const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
