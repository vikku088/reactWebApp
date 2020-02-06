import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Nav />
          <Route exact path = '/' component ={Home}/>
          <Route path = '/about' component ={About}/>
          <Route path = '/contact' component ={Contact}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
