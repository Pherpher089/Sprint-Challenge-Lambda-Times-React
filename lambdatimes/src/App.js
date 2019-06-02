import React, { Component } from 'react';
import ContenPage from './components/ContentPage.js'
import WithAuthenticate from './components/authentication/WithAuthenticate';
import Login from './components/Login';

const CompontentsFromWithAuthenticate = WithAuthenticate(ContenPage)(Login)

const App = () => {
  return (
    <CompontentsFromWithAuthenticate />
  );
}

export default App;
