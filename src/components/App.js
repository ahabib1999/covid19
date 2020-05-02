import React from 'react';
import axios from 'axios';
import Header from './Header';
import SearchBar from './SearchBar';
import AppData from './AppData';


class App extends React.Component {

    state = {
        country: '',
        county: '',
        confirmed: 0,
        deaths: 0,
        recovered: 0
    }

    componentDidMount() {
        axios.get(
            "https://corona.lmao.ninja/v2/jhucsse/counties/Bay"

        )
            .then((res) => {
                const responseData = res.data;
                const countyData = responseData[0];
                if (countyData) {
                    this.setState({
                        country: countyData.country,
                        county: countyData.county,
                        confirmed: countyData.stats.confirmed,
                        deaths: countyData.stats.deaths,
                        recovered: countyData.stats.recovered
                    });
                } else {
                    console.error("Unable to grab countyData");
                }
            });
    }

    render() {

        return (
            <div className="ui grid" style={{ minHeight: "100vh" }}>
                <div className="ui three wide column"></div>
                <div className="ui ten wide column" style={{ marginTop: "3px", backgroundColor: "" }}>
                    <div className="ui inverted huge menu">
                        <Header />
                        <div className="right menu">
                            <SearchBar />
                        </div>
                    </div>
                    <AppData
                    confirmedCases = {this.state.confirmed}
                    fatalCases = {this.state.deaths}
                    recoveredCases = {this.state.recovered} />
                </div>
                <div className="ui three wide column"></div>
            </div>
        );
    };
}

export default App;