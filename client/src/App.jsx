import  React, {Component}  from 'react';
import './App.css';
import PageLayout from './components/layout/page_layout';

class App extends Component{
  render() {
    return(
      <div className="app">
        <PageLayout/>
      </div>
    );
  }
}

export default App;