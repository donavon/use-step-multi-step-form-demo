import React from 'react';
import MultiStepForm from './MultiStepForm';
import AppContext from './AppContext';

import './styles.css';

const App = () => (
  <AppContext.Provider value={{ isReviewMode: false }}>
    <div className="app w3-card-4">
      <div className="w3-container w3-blue">
        <h2>Checkout</h2>
      </div>

      <form className="w3-container w3-margin-top w3-margin-bottom">
        <MultiStepForm />
      </form>

      <footer className="w3-container w3-blue" />
    </div>
  </AppContext.Provider>
);

export default App;
