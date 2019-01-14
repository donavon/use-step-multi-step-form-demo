import { useEffect } from 'react';
import usePersistedState from './usePersistedState';

const usePersistedStateKey = 'darkMode';
const usePersistedDarkModeState = usePersistedState.bind(
  null,
  usePersistedStateKey
);
const defaultClassName = 'dark-mode';
const defaultConfig = {
  className: defaultClassName,
  element: document.body,
};

const setDOMDarkMode = (element, method, className) => {
  element.classList[method](className);
};

const useDarkMode = (initialState, config = defaultConfig) => {
  const [darkMode, setDarkMode] = usePersistedDarkModeState(initialState);
  const toggleDarkMode = () => setDarkMode(current => !current);
  const { element = document.body, className = defaultClassName } = config;

  useEffect(
    () => {
      const method = darkMode ? 'add' : 'remove';
      setDOMDarkMode(element, method, className);
    },
    [darkMode]
  );

  return [
    darkMode,
    () => setDarkMode(true),
    () => setDarkMode(false),
    toggleDarkMode,
  ];
};

export default useDarkMode;
