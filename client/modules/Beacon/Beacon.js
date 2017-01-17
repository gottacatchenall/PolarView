import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { fetchBeaconDefinition, toggleActiveItem, fetchActiveData } from './BeaconActions';
import { getBeaconDefinition } from './BeaconReducer';

import BeaconItemsList from './components/BeaconItemsList/BeaconItemsList';

class Beacon extends Component {
    componentDidMount() {
        this.props.dispatch(fetchBeaconDefinition());
    }

    handleItemClick = (id, name, getData) => {
        this.props.dispatch(toggleActiveItem(id));
        if (getData) {
            this.props.dispatch(fetchActiveData(id, name));
        }
    };

    render() {
        return (
            <div>
                <BeaconItemsList
                    definition={this.props.definition}
                    onItemClick={this.handleItemClick}
                />
            </div>
        );
    }
}

Beacon.need = [() => { return fetchBeaconDefinition(); }];

const mapStateToProps = (state) => {
  return {
    definition: getBeaconDefinition(state)
  };
};

Beacon.propTypes = {
  definition: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    key: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired,
    units: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  })).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
)(Beacon);
