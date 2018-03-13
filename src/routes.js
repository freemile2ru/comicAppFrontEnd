import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Redirect } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from './store';


const initialState = {};
const store = configureStore(initialState);

const PrivateRoute = ({ component: Component, isAuthorised, ...rest }) => (
    <Route
      {...rest} render={(props) => (isAuthorised? <Component {...props} /> : <Redirect to="/" />)}
    />
  );

const Home = () => <div>Hoommmmee</div>
const UserLogout = () => <div> Logout </div>
const UserRegister = () => <div> Register</div>
const LandingPage = () => <div> Landing </div>


const AppRoute = () => (
  <Provider store={store}>
    <Router>
      <div>
        <Route path="/" component={!window.localStorage.getItem("token") ? Home : LandingPage} exact/>
        <Route path="/logout" component={UserLogout} />
        <Route path="/register" component={UserRegister} />
        <PrivateRoute path="/comics" component={LandingPage} isAuthorised={window.localStorage.getItem("token")} />
      </div>
    </Router>
  </Provider>
  )
  export default AppRoute
