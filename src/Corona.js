import React from "react";
import Cards from "./Components/Cards/Cards";
import Chart from "./Components/Charts/Chart";
import CountryPicker from "./Components/CountryPicker/CountryPicker";
import styles from "./Components/App.module.css";
import { fetchData } from "./api";

class Corona extends React.Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const fetchdata = await fetchData();
    this.setState({ data: fetchdata });
  }

  handleCountryChange = async (country) => {
    const fetchdata = await fetchData(country);

    this.setState({ data: fetchdata, country: country });
  };
  render() {
    const { data, country } = this.state;
    return (
      <>
        <div className={styles.container}>
          <Cards data={data} />
          <CountryPicker handleCountryChange={this.handleCountryChange} />
          <Chart data={data} country={country} />
        </div>
      </>
    );
  }
}

export default Corona;
