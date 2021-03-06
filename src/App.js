import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Provider } from "react-redux";
import HomePage from './pages/home-page/HomePage'
import GamePage from './pages/game-page/GamePage'
import OrderPage from './pages/order-page/OrderPage'
import Header from './components/header/Header'
import store from "./redux/index";



function App() {
  return (
    <Provider store={ store }>
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/app/:title">
              <GamePage />
            </Route>
            <Route exact path="/order">
              <OrderPage />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;

