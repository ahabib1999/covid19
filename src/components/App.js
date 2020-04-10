import React from 'react';
import axios from 'axios';
import Header from './Header';
import SearchBar from './SearchBar';


class App extends React.Component {

    state = {
        country: '',
        county: ''
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
                        county: countyData.county
                    });
                } else {
                    console.error("Unable to grab countryData");
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
                    <div>
                        Country: {this.state.country}
                        <div>
                            County: {this.state.county}
                        </div>
                    </div>
                </div>
                <div className="ui three wide column"></div>
            </div>
        );
    };
}

export default App;