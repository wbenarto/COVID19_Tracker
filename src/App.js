import React, { Component } from "react";
import styles from "./App.module.css";
import { fetchData } from "./api";

import { Cards, Chart, CountryPicker } from "./components";

class App extends Component {
  state = {
    data: {},
  };

  // fetching data in class based component
  async componentDidMount() {
    const fetchedData = await fetchData();
    
    this.setState({ data: fetchedData });
  }

  render() {
    const { data } = this.state;

    return (
      <div className={styles.container}>
        <Cards data={data} />
        <CountryPicker />
        <Chart />
      </div>
    );
  }
}

export default App;
