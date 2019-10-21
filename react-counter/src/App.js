import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {value: ''};
    this.onChange = this.onChange.bind(this)
 }
 
 onChange(e){
    const re = /^[0-9\b]+$/;
    if (e.target.value === '' || re.test(e.target.value)) {
       this.setState({value: e.target.value})
    }
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <input className="TextBox-Prop" value={this.state.value} onChange={this.onChange}/>
          <button>Regenerate Counter</button>
          <p>Sum: 0</p>
          <p>
            <button>+</button>
            0
            <button>-</button>
          </p>
        </header>
      </div>
    );
  }
}

export default App;
