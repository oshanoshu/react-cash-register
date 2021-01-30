import './App.css';
import React from 'react';
import { Route}  from 'react-router-dom';
import Navigation from './Navigation';
import About from './About';
import Home from './Home';
import CashRegister from './CashRegister';

class  App extends React.Component{


  render(){
  return (
      <div>
        <Navigation />
          <Route exact path = '/' component = {Home}/>
          <Route path = '/about' component = {About}/>
          <Route path = '/cashregister' component = {CashRegister}/>
      </div>

  );
  }
}


export default App;
