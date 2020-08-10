import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './components/layout/Landing';
//import Navbar from './components/layout/Navbar';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import { Provider } from 'react-redux';
import store from './store'
import Container from './Container';
const App = () => {

  return (
    <Provider store={store}>
      <Router>
        <Fragment>

          <Route exact path='/' component={Landing} />

          <Switch>
            <Route exact path='/register' component={Register} />
            <Route exact path='/login' component={Login} />
          </Switch>
          <Container />


        </Fragment>
      </Router>
    </Provider>

  );
}

export default App;
