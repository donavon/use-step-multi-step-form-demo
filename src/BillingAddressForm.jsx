import React, { useContext } from 'react';

import { FormItem } from './FormHelpers';
import StatesDropdown from './StatesDropdown';
import AppContext from './AppContext';

const BillingAddressForm = ({ setForm, formData, navigation }) => {
  const { next, go } = navigation;
  const { isReviewMode } = useContext(AppContext);

  const fields = [
    { label: 'First Name', name: 'billingFirstName' },
    { label: 'Last Name', name: 'billingLastName' },
    { label: 'Address', name: 'billingAddress' },
    { label: 'City', name: 'billingCity' },
    { label: 'State', name: 'billingState', Component: StatesDropdown },
    { label: 'Zip', name: 'billingZip' },
  ];

  return (
    <div className="form">
      <h3>Billing Address</h3>

      {fields.map(({ Component = FormItem, name, ...props }) => (
        <Component
          key={name}
          name={name}
          value={formData[name]}
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
