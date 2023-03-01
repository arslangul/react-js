import React from 'react';
import { BrowserRouter, Route, Navigate  } from 'react-router-dom';
import Login from './components/Login/Login';


const AppRouter = ()=> (
      <BrowserRouter>
        <Route exact path="/" render={() => <Navigate to="/login" />} />
        <Route path="/login" component={Login} />
      </BrowserRouter>
);

export default AppRouter;

