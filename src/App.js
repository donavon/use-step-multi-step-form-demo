import React from 'react';
import MultiStepForm from './MultiStepForm';
import AppContext from './AppContext';

import './styles.css';

const App = () => (
  <AppContext.Provider value={{ isReviewMode: false }}>
    <div className="app">
      <div className="wrapper">
        <MultiStepForm />
      </div>
    </div>
  </AppContext.Provider>
);

export default App;
