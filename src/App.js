import React, { Component } from 'react';
import Layout from './components/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

class App extends Component {
  render() {

    return (
      <div>
        <Layout>
          <h3>Burger Builder</h3>
          <BurgerBuilder />
          <hr />
        </Layout>
      </div>
    );
  }
}

export default App;
