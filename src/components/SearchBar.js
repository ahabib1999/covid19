import React from 'react';

class SearchBar extends React.Component {

    render() {

        return (
            <div className="item" style={{minWidth: 500, }}>
                <div class="ui icon small input">
                    <input type="text" placeholder="Search..." />
                    <i class="search icon"></i>
                </div>
            </div>
        )
    }
}

export default SearchBar;