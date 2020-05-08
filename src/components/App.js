import React from 'react';
import axios from 'axios';
import Header from './Header';
import SearchBar from './SearchBar';
import AppData from './AppData';
import { countiesList } from './countiesList';


class App extends React.Component {

    state = {
        country: '',
        county: '',
        confirmed: 0,
        deaths: 0,
        recovered: 0,
        selectedCounty: countiesList[0]
    }

    fetchDataByCounty = (selectedCounty) => {
        const axiosUrl = "https://disease.sh/v2/jhucsse/counties/" + selectedCounty  
        axios.get(axiosUrl)
        .then((res) => {
            const responseData = res.data;
            const countyData = responseData[0];
            if (countyData) {
               this.updateCountyData(countyData);
            } else {
                console.error("Unable to grab countyData");
            }
        });
            
    }
    

    handleCountyChange = async (event) => {
        await this.setState({
            selectedCounty: event.target.value
        });

        this.fetchDataByCounty(this.state.selectedCounty);
    }

    updateCountyData = (countyData) => {
        this.setState({
            country: countyData.country,
            county: countyData.county,
            confirmed: countyData.stats.confirmed,
            deaths: countyData.stats.deaths,
            recovered: countyData.stats.recovered
        });
    }

    componentDidMount() {
        axios.get(
            "https://disease.sh/v2/jhucsse/counties/Bay"
        )
            .then((res) => {
                const responseData = res.data;
                const countyData = responseData[0];
                if (countyData) {
                   this.updateCountyData(countyData);
                } else {
                    console.error("Unable to grab countyData");
                }
            });
    }

    displayAllKeys = (countyStateData) => {
        console.log(countyStateData)
    }

    render() {

        return (
            <div className="ui grid" style={{ minHeight: "100vh" }}>
                <div className="ui three wide column"></div>
                <div className="ui ten wide column" style={{ marginTop: "3px", backgroundColor: "" }}>
                    <div className="ui inverted huge menu">
                        <Header />
                        <div className="right menu">
                            <SearchBar selectedCounty = {this.state.selectedCounty}
                            onChange = {this.handleCountyChange}   />
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