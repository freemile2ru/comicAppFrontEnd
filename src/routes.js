import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Redirect } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from './store';

import AuthPage from '../src/containers/Auth/Auth';
import LandingPage from '../src/containers/landing/landing';
import BookmarkPage from '../src/containers/Bookmark/Bookmarks';
import MoviePage from '../src/containers/Movie/movie';


const initialState = {};
const store = configureStore(initialState);

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest} render={(props) => (!!window.localStorage.getItem("token")? <Component {...props} /> : <Redirect to="/" />)}
    />
  );



const AppRoute = () => (
  <Provider store={store}>
    <Router>
      <div>
        <Route path="/"  render={(props) => (!window.localStorage.getItem("token") ?  <AuthPage {...props}/> : <Redirect to="/comics"/>)} exact/>
        <PrivateRoute path="/comics" component={LandingPage} />
        <PrivateRoute path="/bookmarks" component={BookmarkPage} />
        <PrivateRoute path="/movie/:id" component={MoviePage} />
      </div>
    </Router>
  </Provider>
  )
  export default AppRoute
