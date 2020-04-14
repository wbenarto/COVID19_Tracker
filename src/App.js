import React, { Component } from "react";
import styles from "./App.module.css";
import { fetchData } from "./api";

import { Cards, Chart, CountryPicker } from "./components";
import image from './images/image1.png';

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
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <img className={styles.image} src={image} alt='Covid19'/>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country}/>
      </div>
    );
  }
}

export default App;
