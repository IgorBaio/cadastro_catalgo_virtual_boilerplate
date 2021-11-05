import React, { Component } from 'react';
import './App.css';
import { Route, BrowserRouter as Router } from "react-router-dom";
import AddProduto from './Components/AddProduto';
import Table from './Components/Table';
import ViewProduto from './Components/ViewProduto';
import Login from './screens/Login';
import Chat from './screens/Chat';

export default () => {
      return (
        <Router>
          <Route exact path="/" component={Table} />
          {/* <Route exact path="/" component={Login} /> */}
          {/* <Route exact path="/mess" component={Chat} /> */}
          <Route exact path="/add" component={AddProduto} />
          <Route exact path="/view" component={Table} />
          <Route exact path="/produto_view" component={ViewProduto} />
        </Router>  
      );
}


