import React from 'react';
import {Line, Bar} from 'react-chartjs-2';

class lineChart extends React.Component { 


  render() {
    
    return(

      <div className = "chart">

        <Bar
          data={
            labels= ['5/2', '5/9', '5/16', '5/23']
            datasets: [
              {
                label= 'Cases',
                data: [
                  5,
                  10,
                  15,
                  20
                ],
                backgroundColor: "Blue"
              }
            ]
          }
          width={100}
          height={50}
          options={{ }}
        />
      </div>
    )
  }
}

export default lineChart;