import React from 'react';
class Counter extends React.Component {
  constructor(props){
      super(props);
  }
  
  render(){
    return (
      <div>
          <p>
            <button>+</button>
            0
            <button>-</button>
          </p>
      </div>
    );
  }
}

export default Counter;