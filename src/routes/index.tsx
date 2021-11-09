import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Add } from '../pages/Add';
import { Home } from '../pages/Home';
import { store } from '../redux/store';

export const Router: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/add' exact component={Add} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};
