import React from "react";
import StatsCard from "./StatsCard";

class AppData extends React.Component {
  render() {
    return (
      <div style={{marginTop: 20}} className="ui centered three stackable cards">
        <StatsCard
          style={{ marginTop: 10 }}
          header="CONFIRMED"
          currentStat={this.props.confirmedCases}
          color="blue"
        />

        <StatsCard
          header="DEATHS"
          style={{ marginTop: 10 }}
          currentStat={this.props.fatalCases}
          color="red"
        />

        <StatsCard
          style={{ marginTop: 10 }}
          header="RECOVERED"
          currentStat={this.props.recoveredCases}
          color="yellow"
        />
      </div>
    );
  }
}

export default AppData;
