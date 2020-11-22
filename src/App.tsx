import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";

import {Login} from '../src/pages/Login';
import {Home} from '../src/pages/Home';
import {Trainer} from '../src/pages/Trainer';
import {Pokemon} from '../src/pages/Pokemon';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/trainer">
          <Trainer />
        </Route>
        <Route path="/pokemons/:slug">
          <Pokemon />
        </Route>
        <Route path="/pokemons">
          <Home />
        </Route>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
