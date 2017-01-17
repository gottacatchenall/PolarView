import React, { PropTypes } from 'react';
import { Link } from 'react-router';
// Import Style
import styles from './Header.css';

export function Header(props) {
    return (
    <div className={styles.header}>
        <div className={styles.content}>
            <h1 className={styles['site-title']}>
                <Link to="/" >PolarView</Link>
            </h1>
        </div>
    </div>
    );
}

Header.contextTypes = {
    router: React.PropTypes.object,
};

export default Header;
