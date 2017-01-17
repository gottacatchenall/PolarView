import React, { PropTypes } from 'react';
import styles from './DataItem.css'

function DataItem(props, context) {
    var chartData = {};
    if(props.data){
        chartData = {
            datasets: [
                {
                label: props.name,
                data: props.data,
                fill: false,
                backgroundColor: "#4d5387",
                borderColor: "#4d5387",
                pointBorderColor: "#101010",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "#101010",
                pointHoverBorderColor: "#4d5387",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 15,
                spanGaps: false,
                }]
        };
    }
    var graphOptions = {
        scales: {
                xAxes: [{
                    type: 'linear',
                    position: 'bottom'
                }]
        },

    };

    // Bad hacky solution needed because chartjs doens't load properly if window is not defined
    let graph;
    if(window === undefined) {
      graph = (<div></div>);
    }
    else {
      var Line = require('react-chartjs-2').Line;
      graph = (
                <Line
                    data={chartData}
                    options={graphOptions}
                />
            );
    }

    return (
        <div className={styles.dataItem}>
          {graph}
        </div>
    );
}

DataItem.propTypes = {
    name: PropTypes.string.isRequired,
    units: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(PropTypes.shape({
        x: PropTypes.string,
        y: PropTypes.string,
    })),
};

export default DataItem;
