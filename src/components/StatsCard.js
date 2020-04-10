import React from 'react';

class StatsCard extends React.Component {

    getClassName() {
        const className = "ui raised huge card";
        if (this.props.color) {
            className += this.props.color
        };
        return className;
    };
    
    render() {
        
        return(

        <div className = {getClassName()} >
            <div className = "ui content">
                <div className = "header">{this.props.header}</div>
                <div className = "description">
                    <div className = "ui big stastics">
                        <div className = "statistic">
                            <div className = "value">
                                {this.props.currentStat}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default StatsCard;