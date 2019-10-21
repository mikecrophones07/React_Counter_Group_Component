import React from 'react';
class Counter extends React.Component {
  constructor(props){
      super(props);
      this.state = {
        number: 0
      };
  }

  plusBtn = () =>{
    this.setState({number: this.state.number + 1});
    this.props.onCounterValueChange(1);
  }

  minusBtn = () =>{
    this.setState({number: this.state.number - 1});
    this.props.onCounterValueChange(-1);
  }
  
  render(){
    return (
      <div>
          <p>
            <button onClick={this.plusBtn}>+</button>
            {this.state.number}
            <button onClick={this.minusBtn}>-</button>
          </p>
      </div>
    );
  }
}

export default Counter;