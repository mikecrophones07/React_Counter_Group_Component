import React from 'react';
import Counter from '../Counter/Counter'

class CounterGroup extends React.Component {
  constructor(props){
    super(props);
    this.state ={
        counterGroup: this.props.defaultCounter,
        inputValue:''
    }
  }

  handleInputChange = (event) => {
    const re = /^[0-9\b]+$/;
    if (event.target.value === '' || re.test(event.target.value)) {
      this.setState({inputValue: event.target.value})
    }
  }

  regenerateCounters = () => {
      this.setState({counterGroup: this.state.inputValue})
  }
  
  render(){
    let element = Array.apply(null, {length: this.state.counterGroup}).map(element => {
        return (<Counter/>);
    })
    return (
      <div>
          <input type = "text" value={this.state.inputValue} onChange={this.handleInputChange}/>
          <button onClick={this.regenerateCounters}>Regenerate Counter</button>
          <span>Sum: 3</span>
          {element}
      </div>
    );
  }
}

export default CounterGroup;