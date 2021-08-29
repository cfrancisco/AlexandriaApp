import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, Movie } from './pages';

const Routes = (props) => (
  <Switch>
    <Route exact path='/' component={Home} attrs={props} />
    <Route path='/home' component={Home} attrs={props} />
    <Route path='/movie:id' component={Movie} attrs={props} />
    <Route path='*' component={Home} attrs={props} />
  </Switch>
);

export default Routes;
