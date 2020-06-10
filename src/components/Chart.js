import React, { Fragment } from "react";
import { Line, Bar } from "react-chartjs-2";
import axios from "axios";
import getUpdatedCountyName from '../common';

class LineChart extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    timeLineDatesArray: [],
    confirmedCasesArray: [],
    fatalCasesArray: [],
  };

  componentDidUpdate(prevProps) {
    if (this.props.selectedCounty != prevProps.selectedCounty) {
      if (
        this.props.selectedCounty != "" &&
        this.props.selectedCounty != "Select County"
      ) {
        this.getDataObj();
      }
    }
  }

  getDataObj = () => {
    const axiosUrl = `https://disease.sh/v2/historical/usacounties/${this.props.selectedState.toLowerCase()}?lastdays=100`;

    axios.get(axiosUrl).then((res) => {
      if (res) {
        const dataObjectsArray = res.data;

        this.getConfirmedAndDeaths(dataObjectsArray);
      }
    });
  };

  getConfirmedAndDeaths = (dataObjectsArray) => {
    // Extract correct county object
    var selectedCounty = this.props.selectedCounty;
    selectedCounty = getUpdatedCountyName(selectedCounty);

    for (var i = 0; i < dataObjectsArray.length;i ++) {
      const currentCounty = dataObjectsArray[i]["county"];

      if (currentCounty === selectedCounty.toLowerCase()) {
        const selectedObject = dataObjectsArray.find(dataObject => dataObject.county == currentCounty);

        const casesObject = selectedObject["timeline"];
    
        const confirmedCasesObj = casesObject["cases"];
    
        const fatalCasesObj = casesObject["deaths"];

        this.updateConfirmedAndFatalCases(confirmedCasesObj, fatalCasesObj);
      }
    }
  };

  updateConfirmedAndFatalCases = async (confirmedCasesObj, fatalCasesObj) => {
    const tempDatesArray = Object.keys(confirmedCasesObj);
    const currentDatesArray = [];

    for (var i = 0; i < tempDatesArray.length; i+= 1) {
      currentDatesArray.push(tempDatesArray[i]);
    }

    this.setState({
      timeLineDatesArray: currentDatesArray,
      confirmedCasesArray: Object.values(confirmedCasesObj),
      fatalCasesArray: Object.values(fatalCasesObj),
    });
  };

  

  displayConfirmedAndFatalCharts = () => {
    return (
      <div style={{ marginTop: 40 }} className="chart">
        <Line
          data={{
            labels: this.state.timeLineDatesArray,
            datasets: [
              {
                label: "Confirmed",
                data: this.state.confirmedCasesArray,
                fill: false,
                borderColor: "#2185d0",
              },
            ],
          }}
          width={100}
          height={50}
          options={{
            legend: {
              labels: {
                fontSize: 16,
                fontStyle: 'bold'
              }
            }
          }}
        />

        <div style = {{marginTop: 40}}></div>

        <Line
          data={{
            labels: this.state.timeLineDatesArray,
            datasets: [
              {
                label: "Deaths",
                data: this.state.fatalCasesArray,
                fill: false,
                borderColor: "#db2828",
              },
            ],
          }}
          width={100}
          height={50}
          options={{
            legend: {
              labels: {
                fontSize: 16,
                fontStyle: 'bold'
              }
            }
          }}
        />
      </div>
    );
  };

  renderChart = (selectedCounty) => {
    if (selectedCounty == "" || selectedCounty == "Select County") {
      return <div></div>;
    }

    let chartElement = this.displayConfirmedAndFatalCharts();
    return chartElement;
  };

  render() {
    return <Fragment>{this.renderChart(this.props.selectedCounty)}</Fragment>;
  }
}

export default LineChart;
