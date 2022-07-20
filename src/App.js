import React from "react";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  increaseCounter = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  decreaseCounter = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  resetCounter = () => {
    this.setState({
      count: 0,
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.decreaseCounter}>-</button>
        <button onClick={this.resetCounter}>reset</button>
        <button onClick={this.increaseCounter}>+</button>
      </div>
    );
  }
}

export default App;
