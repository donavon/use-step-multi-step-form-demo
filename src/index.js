import React from 'react';
import ReactDOM from 'react-dom';
import MultiStepForm from './MultiStepForm';
import AppContext from './AppContext';

import './styles.css';

function App() {
  return (
    <AppContext.Provider value={{ isReviewMode: false }}>
      <div className="app">
        <div className="wrapper">
          <MultiStepForm />
        </div>
      </div>
    </AppContext.Provider>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
