import React, { Component } from 'react';
import HomeView from './HomeView';

class Home extends Component {
  render() {
    const { navigation } = this.props;

    return (
      <HomeView
        onModal={() => navigation.navigate('Modal')}
      />
    );
  }
}

export default Home;
