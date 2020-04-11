import React from 'react';

class SearchBar extends React.Component {

    state = {
        term: ''
    }

    handleSearchChange = (event) => {
        const searchTerm = event.target.value;

        if (searchTerm){
            this.setState({term: searchTerm})
        }
    }

    render() {

        return (
            <div className="ui item" style={{minWidth: 500, }}>
                <div className="ui icon small input">
                    <input 
                    type="text"
                    placeholder="Search..."
                    value = {this.state.term}
                    onChange = {this.handleSearchChange} />
                    <i className="search icon"></i>
                </div>
            </div>
        )
    }
}

export default SearchBar;