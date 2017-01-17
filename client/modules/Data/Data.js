import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getActiveData } from './DataReducer';

import DataItem from './components/DataItem/DataItem';

// Import Style
//import styles from './Data.css';

class Data extends Component {

    render() {
        if(this.props.active){
            return (
                <div>
                    {
                        this.props.active.map(item => (
                            <div key={item.key}>
                                <DataItem
                                    name={item.name}
                                    key={item.key}
                                    units={item.units}
                                    desc={item.desc}
                                    data={item.data}
                                />
                            </div>
                        ))
                    }
                </div>
            );
        }
        return null;
    }
}

const mapStateToProps = (state) => {
  return {
      active: getActiveData(state)
  };
};

Data.propTypes = {
    active: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        key: PropTypes.string.isRequired,
        active: PropTypes.bool.isRequired,
        units: PropTypes.string.isRequired,
        desc: PropTypes.string.isRequired,
        data: PropTypes.arrayOf(PropTypes.shape({
            x: PropTypes.string,
            y: PropTypes.string,
        }))
    })),
    dispatch: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
)(Data);
