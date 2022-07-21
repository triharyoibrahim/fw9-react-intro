import React from "react";
import axios from "axios";

const api = axios.create({
  baseURL: "https://rickandmortyapi.com/api/character",
});

class App extends React.Component {
  state = {
    count: 0,
    biodata: [],
  };

  constructor() {
    super();
    this.getBiodata();
  }

  getBiodata = async () => {
    let data = await api.get("/").then(({ data }) => data);
    this.setState({ biodata: data });
  };
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
        {this.biodata.map((biodata) => (
          <div>{biodata.name}</div>
        ))}
        <h1>{this.state.count}</h1>
        <button onClick={this.decreaseCounter}>-</button>
        <button onClick={this.resetCounter}>reset</button>
        <button onClick={this.increaseCounter}>+</button>
      </div>
    );
  }
}

export default App;
