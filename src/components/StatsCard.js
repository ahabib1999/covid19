import React from 'react';

class StatsCard extends React.Component {

    state = {
        cardClass: "ui raised centered card",
        statisticClass: "ui bold small statistic"    
    }

    getClassName = () => {
    };
    
    componentDidMount() {
        let divClassName = this.state.cardClass;
        let statisticClassName = this.state.statisticClass;

        if (this.props.color) {
            divClassName += " " + this.props.color
            statisticClassName += " " + this.props.color
            this.setState({
                statisticClass: statisticClassName,
                cardClass: divClassName
            });
        };
    }
    
    render() {
        
        return(

        <div className={this.state.cardClass} style = {{textAlign: "center", marginTop: 100}} >
            <div className = "ui content">
                <div className = "header">{this.props.header}</div>
                <div className = "description">
                    <div className = {this.state.statisticClass}>
                        <div className = "value">
                            {this.props.currentStat}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default StatsCard;