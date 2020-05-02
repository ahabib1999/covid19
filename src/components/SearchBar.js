import React from 'react';
import { countiesList } from './countiesList';

class SearchBar extends React.Component {

    state = {
        county: countiesList[0]
    }
    // [obj1, onb2  ]

    reutrnCountyList = (county) => {
        return countiesList.map((county) => {
            return (
                <option key={county} value={county}>{county}</option>
            );
        })
    }

    handleCountyChange = (event) => {
        this.setState({
            county: event.target.value
        });
    }

    render() {

        return (
            <div className="ui item" style={{ minWidth: 500, }}>
                <select value={this.state.county} onChange={this.handleCountyChange} className="ui fluid search dropdown">
                    {this.reutrnCountyList()}
                </select>
            </div>
        )
    }
}

export default SearchBar;