import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import { configureStore } from '@reduxjs/toolkit'
import { createStore } from 'redux';


// Store - globalised state

//ACTION - describes what you want to do - fn that returns an object
//Increment Action
const increment = ()=>{
  return {
    type: 'INCREMENT',
  }
}

const decrement = ()=>{
  return {
    type: 'DECREMENT',
  }
}

// REDUCER - how actions transform state into next state.
const counter = (state=0, action)=>{
  switch (action.type){
    case 'INCREMENT': return state+1;
    case 'DECREMENT': return state-1;
    default: return state;
  }
}

let store = createStore(counter);

// Display in the console
store.subscribe(()=>console.log("'store.getState()' => "+store.getState()));

// DESPATCH - sends action to reducer
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
