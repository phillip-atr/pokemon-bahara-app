import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import {Login} from '../src/Login';
import {Home} from '../src/Home';
import {Header} from './components/Header'

const App: React.FC = () => {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route path="/trainer">
          Trainer
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        {/* <Route path="/">
          <Login />
        </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
