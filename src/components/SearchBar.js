import React from 'react';
import { countiesList } from './countiesList';

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

    render() {

        return (
            <div className="ui item" style={{ minWidth: 500, }}>
                <select value={this.props.selectedCounty} onChange={this.props.onChange} className="ui fluid search dropdown">
                    {this.reutrnCountyList()}
                </select>
            </div>
        )
    }
}

export default SearchBar;