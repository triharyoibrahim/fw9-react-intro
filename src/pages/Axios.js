import React from "react";
import axios from "axios";

const api = axios.create({
  baseURL: "https://rickandmortyapi.com/api/character",
});

class Axios extends React.Component {
  state = {
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
  render() {
    return (
      <div>
        {this.biodata.map((biodata) => (
          <div>{biodata.name}</div>
        ))}
      </div>
    );
  }
}

export default Axios;
