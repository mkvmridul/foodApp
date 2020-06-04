import React from 'react';

import Aux from './hoc/Aux/Aux';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

function App() {
  return (
    <Aux>
      <Layout>
        <BurgerBuilder />
      </Layout>
    </Aux>
  );
}

export default App;
