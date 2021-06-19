import React, { useEffect, createContext, useReducer, useContext } from 'react'; 
import { useHistory } from 'react-router';
import Navbar from './components/Navbar';
import Routes from './components/Routes';
import './App.css';
import { initialState, reducer } from './reducers/userReducer';

export const UserContext = createContext();


function App() {

  const history = useHistory()
  // const [state, dispatch] = useContext(UserContext);
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(()=> {
    const user = localStorage.getItem("user");
    // console.log(user);
    if(user){
      // history.push('/fullstackcomments');
      dispatch({type: "USER", payload:user});
    }
  }, []);
    return (
    <UserContext.Provider value={{state, dispatch}} >
    <div className="App">
      <Navbar />
      <div className="container">
        <Routes />
      </div>
    </div>
    </UserContext.Provider>
  );
}

export default App;
