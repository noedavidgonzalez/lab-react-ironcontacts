import React, { Component } from 'react'; 
import DynamicContactList from './components/DynamicContactList'; 
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1>IronContacts</h1>
        <DynamicContactList></DynamicContactList>
      </div>
    );
  }
}

export default App;
