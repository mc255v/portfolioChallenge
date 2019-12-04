import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './navbar/Navbar';
import CreatorsList from './creators/CreatorsList';
import Profile from './profile/Profile';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={CreatorsList} />
          <Route exact path="/creator/:id" component={Profile} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
