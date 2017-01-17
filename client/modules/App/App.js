import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

// Import Style
import styles from './App.css';

// Import Components
import Helmet from 'react-helmet';
import DevTools from './components/DevTools';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isMounted: false };
  }

  componentDidMount() {
    this.setState({isMounted: true}); // eslint-disable-line
  }

  render() {
    const { Data, Beacon } = this.props;

    return (
      <div>
        {this.state.isMounted && !window.devToolsExtension && process.env.NODE_ENV === 'development' && <DevTools />}
        <div>
          <Helmet
            title="PolarView"
            titleTemplate="%s - PolarView"
            meta={[
              { charset: 'utf-8' },
              {
                'http-equiv': 'X-UA-Compatible',
                content: 'IE=edge',
              },
              {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
              },
            ]}
          />
          <Header
            toggleAddPost={this.toggleAddPostSection}
          />
          <div className={styles.container}>
            <div className={styles.dataContainer}>
              {Data}
            </div>
            <div className={styles.beaconContainer}>
              {Beacon}
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

App.propTypes = {
//  children: PropTypes.object.isRequired,
    Beacon: PropTypes.object.isRequired,
    Data: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
};

// Retrieve data from store as props
function mapStateToProps(store) {
  return {
      beacon: store.beacon,
      data: store.data
  };
}

export default connect(mapStateToProps)(App);
