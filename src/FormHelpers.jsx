import React from 'react';

export const FormItem = ({ label, type = 'text', ...otherProps }) => (
  <div>
    {type === 'text' ? (
      <p>
        <label>
          {label}
          <input className="w3-input" type={type} {...otherProps} />
        </label>
      </p>
    ) : (
      <p>
        <label>
          <input
            className={type === 'checkbox' ? 'w3-check' : 'w3-radio'}
            type={type}
            {...otherProps}
          />
          {label}
        </label>
      </p>
    )}
  </div>
);

export const Dropdown = ({ options, label, ...others }) => (
  <p>
    <label>
      {label}
      <select className="w3-select" {...others}>
        {options.map(([value, name]) => (
          <option key={value} value={value}>
            {name}
          </option>
        ))}
      </select>
    </label>
  </p>
);
