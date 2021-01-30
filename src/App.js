import './App.css';
import React from 'react';
import { BrowserRouter, Route}  from 'react-router-dom';
import Navigation from './Navigation';
import About from './About';
import Home from './Home';

class  App extends React.Component{


  render(){
  return (
      <div>
        <Navigation />
          <Route exact path = '/' component = {Home}/>
          <Route path = '/about' component = {About}/>
      </div>

  );
  }
}


export default App;
