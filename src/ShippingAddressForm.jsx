import React, { useContext } from 'react';

import { FormItem } from './FormHelpers';
import StatesDropdown from './StatesDropdown';
import AppContext from './AppContext';

const ShippingAddressForm = ({ setForm, formData, navigation }) => {
  const { previous, next, go } = navigation;
  const { isReviewMode } = useContext(AppContext);
  const { shippingSameAsBilling, billing, shipping } = formData;

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
      <h3>Shipping Address</h3>

      <FormItem
        label="Same as Billing"
        name="shippingSameAsBilling"
        checked={shippingSameAsBilling}
        type="checkbox"
        onChange={setForm}
      />

      {fields.map(({ Component = FormItem, name, ...props }) => (
        <Component
          key={name}
          name={`${shippingSameAsBilling ? 'billing' : 'shipping'}.${name}`}
          value={shippingSameAsBilling ? billing[name] : shipping[name]}
          disabled={shippingSameAsBilling}
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
          <>
            <button
              className="w3-button w3-white w3-border w3-left"
              type="button"
              onClick={previous}
            >
              ‹ Billing Address
            </button>
            <button
              className="w3-button w3-white w3-border w3-right"
              type="button"
              onClick={next}
            >
              Shipping Method ›
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ShippingAddressForm;
