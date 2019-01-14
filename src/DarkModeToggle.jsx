import React from 'react';

import Toggle from './Toggle';
import useDarkMode from 'use-dark-mode';

const DarkModeToggle = () => {
  const [isDarkMode, setDarkMode, clearDarkMode, toggleDarkMode] = useDarkMode(
    false
  );

  return (
    <>
      <div className="dark-mode-toggle">
        <button type="button" onClick={clearDarkMode}>
          ☀
        </button>
        <Toggle checked={isDarkMode} onChange={toggleDarkMode} />
        <button type="button" onClick={setDarkMode}>
          ☾
        </button>
      </div>
    </>
  );
};

export default DarkModeToggle;
