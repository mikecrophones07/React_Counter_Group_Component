import React from 'react';
import './App.css';
import CounterGroup from './components/CounterGroup/CounterGroup'

class App extends React.Component {
  render(){
    return (
      <CounterGroup defaultCounter = {3}/>
    );
  }
}

export default App;
