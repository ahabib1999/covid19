import React from 'react';
import Header from './Header';
import SearchBar from './SearchBar';

class App extends React.Component {

    render() {

        return (
            <div className="ui grid" style={{ minHeight: "100vh"}}>
                <div className="ui three wide column"></div>
                <div className="ui ten wide column" style={{ marginTop: "3px", backgroundColor: "" }}>
                    <div className="ui inverted huge menu">
                        <Header />
                        <div className="right menu">
                            <SearchBar />
                        </div>
                    </div>
                </div>
                <div className="ui three wide column"></div>
            </div>
        );
    };
}

export default App;