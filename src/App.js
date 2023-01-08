import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, logInUser, logOutUser } from "./actions";


function App() {
  const counter = useSelector(state=> state.counter);
  const isLogged = useSelector(state=> state.isLogged);
  const dispatch = useDispatch();

  function incrementCounter(num){
    dispatch(increment(num));
    if (counter%7){
      dispatch(logInUser())
    } else {dispatch(logOutUser());}
  }

  return (
    <div className="App">
      <h1>counter {counter}</h1>
      <button onClick ={()=>incrementCounter(1)}>+</button>
      <button onClick={()=>dispatch(decrement(1))}>-</button>
      {isLogged?<h3>Information you need to be logged in to see!</h3>:<h3>Access denied!</h3>}
      
    </div>
  );
}

export default App;
