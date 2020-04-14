import React, { Component } from "react";
import styles from "./App.module.css";
import { fetchData } from "./api";

import { Cards, Chart, CountryPicker } from "./components";

class App extends Component {
  state = {
    data: {},
    country: '',
  };

  // fetching data in class based component
  async componentDidMount() {
    const fetchedData = await fetchData();
    
    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country)
    // fetch data and set state
    console.log(fetchedData);
    this.setState({ data: fetchedData, country: country })
  }


  render() {
    const { data } = this.state;

    return (
      <div className={styles.container}>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart />
      </div>
    );
  }
}

export default App;
