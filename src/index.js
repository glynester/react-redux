import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import allReducers from './reducers';
import { Provider } from 'react-redux'; // Connects global state to the entire app - wrap the whole app with this "component" - see below.

// const store = createStore(counterReducer, isLoggedReducer); // doesn't work. Need to combine first with "combineReducers".
const myStore = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()    // Add this line to aid with development - also need chrome extension added:  https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd 
  // "Redux" tab in chrome developer tools will show your app's state.
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={myStore}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
