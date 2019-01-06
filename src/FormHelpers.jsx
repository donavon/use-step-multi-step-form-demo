import React from 'react';

export const FormItem = ({ label, type = 'text', ...otherProps }) => (
  <div>
    {type === 'text' ? (
      <React.Fragment>
        <label>
          {label}
          <input type={type} {...otherProps} />
        </label>
      </React.Fragment>
    ) : (
      <React.Fragment>
        <label />
        <input type={type} {...otherProps} />
        {label}
      </React.Fragment>
    )}
  </div>
);

export const Dropdown = ({ options, label, ...others }) => (
  <React.Fragment>
    <label>{label}</label>
    <select {...others}>
      {options.map(([value, name]) => (
        <option key={value} value={value}>
          {name}
        </option>
      ))}
    </select>
  </React.Fragment>
);
