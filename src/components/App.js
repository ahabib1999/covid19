import React, { Fragment } from "react";
import axios from "axios";
import Header from "./Header";
import SearchBar from "./SearchBar";
import AppData from "./AppData";
import data from "../data/counties-states-data.json";
import LineChart from "./Chart";
import getUpdatedCountyName from "../common";

class App extends React.Component {
  state = {
    country: "",
    currentState: "",
    county: "",
    confirmed: 0,
    deaths: 0,
    recovered: 0,
    selectedCounty: "Select County",
    selectedState: "Select State",
    countiesList: [],
  };

  returnCountyList = (selectedState) => {
    let countiesArray = [];

    countiesArray = data[selectedState];

    this.setState({
      countiesList: countiesArray,
    });
  };

  fetchDataByCounty = (selectedCounty) => {
    var countyData = "";
    selectedCounty = getUpdatedCountyName(selectedCounty);
    const axiosUrl = "https://disease.sh/v2/jhucsse/counties/" + selectedCounty;
    axios.get(axiosUrl).then((res) => {
      const responseData = res.data;
      for (var i = 0; i < responseData.length; i++) {
        const currentState = responseData[i]["province"];
        if (currentState === this.state.selectedState) {
          countyData = responseData[i];
          console.log(countyData);
        }
      }
      if (countyData) {
        this.updateCountyData(countyData);
      } else {
        alert("This is not a correct county, select another county");
      }
    });
  };

  handleStateChange = async (event) => {
    if (event.target.value === "Select State") {
      return <option>Select State</option>
    }
    await this.setState({
      selectedState: event.target.value,
    });

    this.returnCountyList(this.state.selectedState);
  };

  handleCountyChange = async (event) => {
    await this.setState({
      selectedCounty: event.target.value,
    });

    this.fetchDataByCounty(this.state.selectedCounty);
  };

  updateCountyData = (countyData) => {
    this.setState({
      country: countyData.country,
      county: countyData.county,
      confirmed: countyData.stats.confirmed,
      deaths: countyData.stats.deaths,
      recovered: countyData.stats.recovered,
    });
  };

  render() {
    return (
      <Fragment>
        <div className="ui grid" style={{ minHeight: "100vh" }}>
          <div className="ui one wide column"></div>
          <div
            className="ui fourteen wide column"
            style={{ marginTop: "3px", backgroundColor: "" }}
          >
            <div className="ui secondary stackable huge menu">
              <Header />
              <div className="right menu">
                <SearchBar
                  selectedState={this.state.selectedState}
                  selectedCounty={this.state.selectedCounty}
                  onCountyChange={this.handleCountyChange}
                  onStateChange={this.handleStateChange}
                  countiesList={this.state.countiesList}
                />
              </div>
            </div>
            <div className="ui one wide column">
              <AppData
                confirmedCases={this.state.confirmed}
                fatalCases={this.state.deaths}
                recoveredCases={this.state.recovered}
              />
            </div>
            <LineChart
              selectedState={this.state.selectedState}
              selectedCounty={this.state.selectedCounty}
            />
          </div>
        </div>
        <footer className="footer">
          <h3>Akbar Habib &copy; 2020</h3>
          <h3>
            Source:{" "}
            <a href="https://corona.lmao.ninja/docs/#/" target="_blank">
              Novel COVID 19 API
            </a>{" "}
          </h3>
        </footer>
      </Fragment>
    );
  }
}

export default App;
