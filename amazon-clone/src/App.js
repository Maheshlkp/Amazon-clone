import React, { useEffect } from "react"
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Checkout from "./Checkout";
import Login from "./Login"
import { auth } from './firebase'
import { useStateValue } from "./StateProvider";
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from "@stripe/react-stripe-js"
import Orders from './Orders'
import Footer from "./Footer"
// import Order from './Order'


const promise = loadStripe('pk_test_51I0uDqILdqJI4o0K6S88UFFNVN8qmjgCutWD6owldZOSzV3KSf5lkOMRFYl7Wqd1xqwAnwUvqPseHJuNVjyM66gY00tGZCdcIN');

function App () {
  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log("The user is >>", authUser);
      if (authUser) {
        //the user just logged in/ was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })

      } else {
        //the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })

      }
    })
  }, [])


  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
            {/* <Order /> */}
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
            <Footer/>
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
