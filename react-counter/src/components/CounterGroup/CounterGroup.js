import React from 'react';
import Counter from '../Counter/Counter'

class CounterGroup extends React.Component {
  constructor(props){
    super(props);

  }
  
  render(){
    let element = Array.apply(null, {length: this.props.defaultCounter}).map(element => {
        return (<Counter/>);
    })
    return (
      <div>
          <input type = "text"/>
          <button>Regenerate Counter</button>
          <span>Sum: 0</span>
          {element}
      </div>
    );
  }
}

export default CounterGroup;