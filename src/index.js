import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'
import 'semantic-ui-css/semantic.min.css';


class Index extends React.Component {
    render() {

        return (
            <div>
                <App />
            </div>
        );
    };
}

ReactDOM.render(<Index />, document.getElementById('root'));