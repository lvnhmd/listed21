import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxPromise from 'redux-promise';
import ReduxThunk from 'redux-thunk';

import reducers from './reducers';
import App from './App';
import Login from './components/login';
import { LOGIN_USER } from './actions/types';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise, ReduxThunk)(
  createStore
);
const store = createStoreWithMiddleware(reducers);

const user = localStorage.getItem('user');

if (user) {
  store.dispatch({ type: LOGIN_USER, payload: user });
}

ReactDOM.render(
  <Provider store={store}>
    {/* <Switch>
        <Route exact path="/" component={App} />
        <Route path="/users" component={Users} />
        <Route path="/contact" component={Contact} />
        <Route component={Notfound} />
      </Switch> */}

    <Router>
      <Route exact path='/' component={App} />
      <Route path='/login' component={Login} />
    </Router>
  </Provider>,
  document.getElementById('canvas')
);
