import  React, {Component}  from 'react';
import './App.css';
import {Routes, Route, Switch, Link} from 'react-router-dom'
import Landing from './components/layout/landing';
import Register from './components/auth/register';
import FirstNavbar from './components/layout/navbar';
import Login from './components/auth/login';

class App extends Component{
  render() {
    return(
      <div className="app">
        <FirstNavbar />
        <Routes>
          <Route path="/" element={ <Landing/> } />
          <Route path="/registration" element={<Register />} /> 
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    );
  }
}

export default App;