import React, { Fragment } from "react";
import data from "../data/counties-states-data.json";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  returnStatesList = () => {
    const statesList = [];

    for (let [key, value] of Object.entries(data)) {
      statesList.push(`${key}`);
    }

    // ['A','B','C'] => ['Select', 'A','B','C']
    let statesArr = statesList.map((currentState) => {
      return (
        <option key={currentState} value={currentState}>
          {currentState}
        </option>
      );
    });

    statesArr.splice(
      0,
      0,
      <option key={"Select State"} value={"Select State"}>
        Select State
      </option>
    );
    return statesArr;
  };

  displayCountiesList = (countiesList) => {
    if (countiesList.length === 0 || this.props.selectedCounty === "") {
      return <option>Select County</option>;
    }
    let countiesArr = countiesList.map((county) => {
      return (
        <option key={county} value={county}>
          {county}
        </option>
      );
    });

    countiesArr.splice(
      0,
      0,
      <option key={"Select County"} value={"Select County"}>
        Select County
      </option>
    );
    return countiesArr;
  };

  render() {
    return (
      <Fragment>
        <div className="ui item">
          <select
            style={{ borderRadius: 5 }}
            value={this.props.selectedState}
            onChange={this.props.onStateChange}
            className="ui fluid black search dropdown"
          >
            {this.returnStatesList()}
          </select>
        </div>
        <div className="ui item">
          <select
            id="county"
            style={{ borderRadius: 5 }}
            value={this.props.selectedCounty}
            onChange={this.props.onCountyChange}
            className="ui fluid search dropdown"
          >
            {this.displayCountiesList(this.props.countiesList)}
          </select>
        </div>
      </Fragment>
    );
  }
}

export default SearchBar;
