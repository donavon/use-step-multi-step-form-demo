import { useState, useEffect } from 'react';

const keyPrefix = 'USE_PERSISTED_STATE';

const serialize = value => JSON.stringify(value);
const deserialize = json => JSON.parse(json);

const getLocalStorage = (provider, key, defaultValue) => {
  const json = provider.getItem(`${keyPrefix}.${key}`);
  return json === null ? defaultValue : deserialize(json);
};

const setLocalStorage = (provider, key, value) => {
  provider.setItem(`${keyPrefix}.${key}`, serialize(value));
};

const usePersistedState = (
  key,
  initialState,
  provider = global.localStorage
) => {
  const [state, setState] = useState(() =>
    getLocalStorage(provider, key, initialState)
  );

  useEffect(
    () => {
      setLocalStorage(provider, key, state);
    },
    [state]
  );

  return [state, setState];
};

export default usePersistedState;
