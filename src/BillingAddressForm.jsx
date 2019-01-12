import React, { useContext } from 'react';

import { FormItem } from './FormHelpers';
import StatesDropdown from './StatesDropdown';
import AppContext from './AppContext';

const BillingAddressForm = ({ setForm, formData, navigation }) => {
  const { next, go } = navigation;
  const { isReviewMode } = useContext(AppContext);
  const { billing } = formData;

  const fields = [
    { label: 'First Name', name: 'firstName' },
    { label: 'Last Name', name: 'lastName' },
    { label: 'Address', name: 'address' },
    { label: 'City', name: 'city' },
    { label: 'State', name: 'state', Component: StatesDropdown },
    { label: 'Zip', name: 'zip' },
  ];

  return (
    <div className="form">
      <h3>Billing Address</h3>

      {fields.map(({ Component = FormItem, name, ...props }) => (
        <Component
          key={name}
          name={`billing.${name}`}
          value={billing[name]}
          {...props}
          onChange={setForm}
        />
      ))}

      <div className="w3-bar">
        {isReviewMode ? (
          <button
            className="w3-button w3-dark-grey w3-border w3-right"
            type="button"
            onClick={() => go('review')}
          >
            Review Order
          </button>
        ) : (
          <button
            className="w3-button w3-white w3-border w3-right"
            type="button"
            onClick={next}
          >
            Shipping Address ›
          </button>
        )}
      </div>
    </div>
  );
};

export default BillingAddressForm;
