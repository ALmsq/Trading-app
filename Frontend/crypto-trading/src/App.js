import React from 'react';
// import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import BodyContainer from './containers/BodyContainer'
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <Header/>
        <BodyContainer/>
      </div>
    );
  }
}
export default App
