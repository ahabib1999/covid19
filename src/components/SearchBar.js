import React from 'react';
import { countiesList } from './countiesList';
import data from '../data/counties-states-data.json'

class SearchBar extends React.Component {

    constructor(props) {
        super(props);
    }

    reutrnCountyList = (county) => {
        return countiesList.map((county) => {
            return (
                <option key={county} value={county}>{county}</option>
            );
        })
    }

    returnStatesList = () => {
        const statesList = []

        for (let [key, value] of Object.entries(data)) {
            statesList.push(`${key}`)
        }

        return statesList.map((currentState) => {
            return (
            <option key = {currentState} value = {currentState}>{currentState}</option>
            );
        })
    }

    render() {

        return (
            <div className = "ui item" style={{ minWidth: 600, }}>
                <select className="ui fluid search dropdown">
                    {this.returnStatesList()}
                </select>
                <div className="ui item" style={{ minWidth: 300, }}>
                    <select value={this.props.selectedCounty} onChange={this.props.onChange} className="ui fluid search dropdown">
                        {this.reutrnCountyList()}
                    </select>
                </div>
            </div>
        )
    }
}

export default SearchBar;