import React, { useContext } from 'react';

import { FormItem } from './FormHelpers';
import StatesDropdown from './StatesDropdown';
import AppContext from './AppContext';

const ShippingAddressForm = ({ setForm, formData, navigation }) => {
  const { shippingSameAsBilling } = formData;
  const { previous, next, go } = navigation;
  const { isReviewMode } = useContext(AppContext);

  const fields = [
    {
      label: 'First Name',
      name: shippingSameAsBilling ? 'billingFirstName' : 'shippingFirstName',
    },
    {
      label: 'Last Name',
      name: shippingSameAsBilling ? 'billingLastName' : 'shippingLastName',
    },
    {
      label: 'Address',
      name: shippingSameAsBilling ? 'billingAddress' : 'shippingAddress',
    },
    {
      label: 'City',
      name: shippingSameAsBilling ? 'billingCity' : 'shippingCity',
    },
    {
      label: 'State',
      name: shippingSameAsBilling ? 'billingState' : 'shippingState',
      Component: StatesDropdown,
    },
    {
      label: 'Zip',
      name: shippingSameAsBilling ? 'billingZip' : 'shippingZip',
    },
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
          name={name}
          value={formData[name]}
          disabled={shippingSameAsBilling}
          {...props}
          onChange={setForm}
        />
      ))}

      <div class="w3-bar">
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
