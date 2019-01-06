import React, { Fragment } from 'react';

export const FormItem = ({ label, type = 'text', ...otherProps }) => (
  <div>
    {type === 'text' ? (
      <Fragment>
        <label>{label}</label>
        <input type={type} {...otherProps} />
      </Fragment>
    ) : (
      <Fragment>
        <label />
        <input type={type} {...otherProps} />
        {label}
      </Fragment>
    )}
  </div>
);

export const Dropdown = ({ options, label, ...others }) => (
  <Fragment>
    <label>{label}</label>
    <select {...others}>
      {options.map(([value, name]) => (
        <option key={value} value={value}>
          {name}
        </option>
      ))}
    </select>
  </Fragment>
);
