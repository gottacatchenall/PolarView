import React from 'react';

// Import Style
import styles from './Footer.css';

export function Footer() {
  return (
    <div className={styles.footer}>
      <p>PolarView &nbsp; | &nbsp; A Telemetry Visualization Tool For PolarCube &nbsp; | &nbsp; Colorado Space Grant Consortium | &nbsp; Address Broken Stuff to michael.catchen@colorado.edu </p>
    </div>
  );
}

export default Footer;
