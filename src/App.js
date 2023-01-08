import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/Login';
import { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from './components/StateProvider';


function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
   

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);
      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

  }, []);
  return (
    <Router>
    <div className="app">
    
    <Routes>
    <Route exact path="/login" element={<Login/>}/>
      <Route exact path="/checkout" element={<><Header/><Checkout/></>}/>
      <Route exact path="/" element={<><Header/><Home /></>}/>
      <Route path="/*" element={ <div>404 Not found</div>}>
         
        </Route>
      
      
    
    </Routes>
   
    </div>
    </Router>

  );
}

export default App;
