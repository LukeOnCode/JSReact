import  React, {Component}  from 'react';
import './App.css';
import {Routes, Route, Switch, Link} from 'react-router-dom'
import Landing from './components/layout/landing';
import Register from './components/auth/register';
import FirstNavbar from './components/layout/navbar';
import Login from './components/auth/login';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useToken } from '../src/utils/front_utils';


class App extends Component{
  constructor(props){
    super(props);
  }
  componentDidMount(){
    if(localStorage.Token){
      useToken(localStorage.Token);
    }
  }

  render() {
    return(
      <div className="app vh-100">
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