import React from 'react';

class SearchBar extends React.Component {

    render() {

        return (
            <div className="item" style={{minWidth: 500, }}>
                <div className="ui icon small input">
                    <input type="text" placeholder="Search..." />
                    <i className="search icon"></i>
                </div>
            </div>
        )
    }
}

export default SearchBar;