import React, { PropTypes } from 'react';
import BeaconItem from '../BeaconItem/BeaconItem';

function BeaconItemsList(props, context) {
  return (
    <div>
      {
        props.definition.map(item => (
          <div key={item.key}>
            <BeaconItem
              name={item.name}
              key={item.key}
              active={item.active}
              units={item.units}
              desc={item.desc}

              onClick={() => props.onItemClick(item.key, item.name, !item.active)}
            />
          </div>
        ))
      }
    </div>
  );
}

BeaconItemsList.propTypes = {
  definition: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        key: PropTypes.string.isRequired,
        active: PropTypes.bool.isRequired,
        units: PropTypes.string.isRequired,
        desc: PropTypes.string.isRequired
  })).isRequired,
  onItemClick: PropTypes.func.isRequired
};

export default BeaconItemsList;
