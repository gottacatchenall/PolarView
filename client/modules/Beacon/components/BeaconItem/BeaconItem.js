import React, { PropTypes } from 'react';
import classnames from 'classnames';
import styles from './BeaconItem.css';

function BeaconItem(props, context) {

  return (
    <div onClick={props.onClick} className = {styles.beaconItem + ' ' +  (props.active ? styles.activeBeaconItem : styles.inactiveBeaconItem)}>
          {props.name}
    </div>
  );
}

BeaconItem.propTypes = {
  name: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  units: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default BeaconItem;
