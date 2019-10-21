import React from 'react';
import Counter from '../Counter/Counter'

class CounterGroup extends React.Component {
  constructor(props){
    super(props);
    this.state ={
        counterGroup: this.props.defaultCounter,
        inputValue:'',
        sum:0
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

  renderCounters = () => {
    return Array.apply(null, {length: this.state.counterGroup}).map(element => {
        return (<Counter/>);
    })
  }
  
  render(){
    let element = this.renderCounters()
    return (
      <div>
          <input type = "text" value={this.state.inputValue} onChange={this.handleInputChange}/>
          <button onClick={this.regenerateCounters}>Regenerate Counter</button>
          <span>Sum: 3</span>
          <div>
            {element}
          </div>
      </div>
    );
  }
}

export default CounterGroup;