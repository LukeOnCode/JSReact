import  React, {Component}  from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Landing from './components/layout/landing';
import Register from './components/auth/register';
import FirstNavbar from './components/layout/navbar';
import Login from './components/auth/login';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './components/layout/home_page';
import { ProtectedRoute } from './utils/front_utils';
import PersonalPage from './components/layout/personal_page';

class App extends Component{
  constructor(props){
    super(props);
  }

  render() {
    return(
      <div className="app vh-100">
        <FirstNavbar />
        <Routes>
          <Route path="/" element={ <Landing/> } />
          <Route path="/registration" element={<Register />} /> 
          <Route path="/login" element={<Login/>} />
          <Route 
                path="/api/profile" 
                element={
                  <ProtectedRoute {...this.state}>
                    <HomePage/>
                  </ProtectedRoute>
                } 
          />
            <Route path="/api/profile/user/:user_id" element={<PersonalPage/>} />
        </Routes>
      </div>
    );
  }
}

export default App;