// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from './Layout';
import Home from './Home';
import CurrencyConverter from './CurrencyConverter';

import './App.css';
import CurrencyTable from './CurrencyTable';

const App = () => {
  return (
    <Router basename="/expert-rate">
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/currencyconverter" component={CurrencyConverter} />
          <Route render={CurrencyTable} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
