import React, { useEffect, createContext, useReducer, useContext } from 'react'; 
import Navbar from './components/Navbar';
import Routes from './components/Routes';
import './App.css';
import { initialState, reducer } from './reducers/userReducer';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Routes />
      </div>
    </div>
  );
}

export default App;
