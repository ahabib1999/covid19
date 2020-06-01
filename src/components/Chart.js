import React from 'react';
import {Line, Bar} from 'react-chartjs-2';
import axios from 'axios';

class LineChart extends React.Component {

  state = {
    timeLineDatesArray: [],
    confirmedCasesArray: [],
    fatalCasesArray: []
  }

  getDataObj = () => {
    const axiosUrl = "https://disease.sh/v2/historical/usacounties/florida?lastdays=7"

    axios.get(axiosUrl).then((res) => {
      const response = res;

      if (response) {
        const dataObject = res.data[0];

        {this.getConfirmedAndDeaths(dataObject)}
      }
    });
  };

  getConfirmedAndDeaths = (dataObject) => {

    const casesObject = dataObject["timeline"];

    const confirmedCasesObj = casesObject["cases"];
    console.log(confirmedCasesObj);

    const fatalCasesObj = casesObject["deaths"];
    console.log(fatalCasesObj);

    {this.UpdateConfirmedAndFatalCases(confirmedCasesObj, fatalCasesObj)}
  }

  UpdateConfirmedAndFatalCases = async (confirmedCasesObj, fatalCasesObj) => {

    await this.setState({
      timeLineDatesArray: Object.keys(confirmedCasesObj),
      confirmedCasesArray: Object.values(confirmedCasesObj),
      fatalCasesArray: Object.values(fatalCasesObj)
    });
  };


  render() {
    
    return(

      <div style={{marginTop: 20}} onClick = {this.getDataObj} className = "chart">

        <Line
          data={{
            labels: this.state.timeLineDatesArray,
            datasets: [
              {
                label: 'Confirmed',
                data: this.state.confirmedCasesArray,
                fill: false,
                borderColor: "Blue"
              },
            ]
          }}
          width={100}
          height={50}
          options={{ }}
        />

        <Line 
          data={{
            labels: this.state.timeLineDatesArray,
            datasets: [
              {
                label: 'Deaths',
                data: this.state.fatalCasesArray,
                fill: false,
                backgroundColor: "Red"
              },
            ]
          }}
          width={100}
          height={50}
          options={{ }}
        />
      </div>
    )
  }
}

export default LineChart;