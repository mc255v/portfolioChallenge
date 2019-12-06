import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../history';
import Navbar from './navbar/Navbar';
import CreatorsList from './creators/CreatorsList';
import Profile from './profile/ProfileMain';
import WorksMain from './works/WorksMain';
import NotFound from './notfound/NotFound';
import Footer from '../footer/Footer';

const App = () => {
  return (
    <div className="App">
      <Router history={history}>
        <Navbar />
        <Switch>
          <Route exact path="/" component={CreatorsList} />
          <Route exact path="/creator/:id" component={Profile} />
          <Route exact path="/works/:id" component={WorksMain} />
          <Route exact path="/notfound" component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
