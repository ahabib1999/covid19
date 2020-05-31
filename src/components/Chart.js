import React from 'react';
import {Line, Bar} from 'react-chartjs-2';
import axios from 'axios';

class LineChart extends React.Component {

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

    {this.displayConfirmedCases(confirmedCasesObj)}
  }

  displayConfirmedCases = (confirmedCasesObj) => {

    const confirmedCasesTimeline = Object.entries(confirmedCasesObj);
    console.log(confirmedCasesTimeline);
  }


  render() {
    
    return(

      <div onClick = {this.getDataObj} className = "chart">

        <Line
          data={{
            labels: ['1/22/20', '1/29/20', '2/5/20', '2/12/20', '2/19/20', '2/26/20', '3/3/20', '3/10/20', '3/17/20', '3/24/20', '3/31/20', '4/7/20', '4/14/20', '4/21/20', '4/28/20', '5/5/20', '5/12/20', '5/19/20'],
            datasets: [
              {
                label: 'Confirmed',
                data: [
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  6,
                  50,
                  373,
                  763,
                  1038,
                  1235,
                  1363,
                  1446,
                  1537,
                  1699
                ],
                fill: false,
                borderColor: "Blue"
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