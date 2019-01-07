import React from 'react';
import MultiStepForm from './MultiStepForm';
import AppContext from './AppContext';

import './styles.css';

const App = () => (
  <AppContext.Provider value={{ isReviewMode: false }}>
    <div className="app w3-card-4">
      <div class="w3-container w3-blue">
        <h2>Checkout</h2>
      </div>

      <form class="w3-container">
        <p>
          <MultiStepForm />
        </p>
      </form>

      <footer class="w3-container w3-blue">
        <div style={{ height: 3 }} />
      </footer>
    </div>
  </AppContext.Provider>
);

export default App;
