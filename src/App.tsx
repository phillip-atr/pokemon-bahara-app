import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";

import {Login} from '../src/pages/Login';
import {Register} from '../src/pages/Register';
import {TrainerCreate} from '../src/pages/TrainerCreate';
import {TrainerEdit} from '../src/pages/TrainerEdit';
import {Home} from '../src/pages/Home';
import {Trainer} from '../src/pages/Trainer';
import {Pokemon} from '../src/pages/Pokemon';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/trainer/:slug/edit">
          <TrainerEdit />
        </Route>
        <Route path="/trainer">
          <Trainer />
        </Route>
        <Route path="/pokemons/:slug">
          <Pokemon />
        </Route>
        <Route path="/pokemons">
          <Home />
        </Route>
        <Route path="/register/:slug">
          <TrainerCreate />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
