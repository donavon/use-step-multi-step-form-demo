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
      <h2>Billing Address</h2>

      {fields.map(({ Component = FormItem, name, ...props }) => (
        <Component
          key={name}
          name={name}
          value={formData[name]}
          {...props}
          onChange={setForm}
        />
      ))}

      <div className="navigation">
        {isReviewMode ? (
          <button onClick={() => go('review')}>Review Order</button>
        ) : (
          <button onClick={next}>Next</button>
        )}
      </div>
    </div>
  );
};

export default BillingAddressForm;
