import React from 'react';
import StatsCard from './StatsCard';

class AppData extends React.Component {
    
    render() {
        
        return(
            <div className = "ui centered three stackable cards" style = {{backgroundColor: "#181a1b"}}>
                <StatsCard 
                header = "CONFIRMED"
                currentStat = {this.props.confirmedCases}
                color = "blue" />

                <StatsCard
                header = "DEATHS"
                currentStat = {this.props.fatalCases}
                color = "red" />

                <StatsCard
                header = "RECOVERED"
                currentStat = {this.props.recoveredCases}
                color = "yellow" />
            </div>
        )
    }
}

export default AppData;