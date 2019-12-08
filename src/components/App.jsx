import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './navbar/Navbar';
import CreatorsList from './creators/CreatorsList';
import Profile from './profile/ProfileMain';
import WorksMain from './works/WorksMain';
import NotFound from './abstracts/NotFound';
import Footer from '../footer/Footer';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={CreatorsList} />
          <Route path="/creator/:id" component={Profile} />
          <Route path="/works/:id" component={WorksMain} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
