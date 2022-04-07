import logo from './logo.svg';
import React, { Component } from 'react'
import './App.css';
import Message  from './components/message';

class App extends Component {
  render(){
  return (
    <div className="App">
      <Message />
    </div>
  );
}
}

export default App;
