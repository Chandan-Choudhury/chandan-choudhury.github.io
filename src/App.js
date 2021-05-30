import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import SigninPage from './pages/signin';
import PhotographyPage from './pages/photography';
import AerialShotsPage from './pages/aerialshots';
import CurrencyCollectionPage from './pages/currencycollection';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/comingsoon' component={SigninPage} exact />
        <Route path='/photography' component={PhotographyPage} exact />
        <Route path='/aerialshots' component={AerialShotsPage} exact />
        <Route path='/currencycollection' component={CurrencyCollectionPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
