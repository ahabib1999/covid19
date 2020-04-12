import React from 'react';

class SearchBar extends React.Component {

    state = {
        searchTerm: ''
    }

    handleSearchChange = (event) => {
        const userInput = event.target.value;

        if (userInput){
            this.setState({searchTerm: userInput})
        }
    }

    displayMenu() {
        return (
            <div className = "ui vertical menu">
                <div className="menu">
                    <li className = "item">France</li>
                    <li className = "item">Australia</li>
                </div>
            </div>
        )
    }

    render() {

        return (
            <div className="ui item" style={{minWidth: 500, }}>
                <div className="ui fluid search selection dropdown">
                    <input 
                    type="hidden"
                    name = "County" />
                    {/* /* value = {this.state.term}
                     onChange = {this.handleSearchChange} */ }
                    <i className="dropdown icon"></i>
                    <div className="default text">Select County</div>
                    <div className = "menu">
                        <div className = "item">Bay</div>
                        <div className = "item">Broward</div>
                        <div className = "item">Rutherford</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchBar;