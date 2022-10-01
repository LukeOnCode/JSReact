import  React, {Component}  from 'react';
import './App.css';
import Navbar from './components/layout/navbar'; 

class App extends Component{
  render() {
    return(
      <div className="app">
        <Navbar/>
        <div>ade</div>
      </div>
    );
  }
}

export default App;