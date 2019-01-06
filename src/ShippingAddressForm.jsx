import React, { useContext } from 'react';

import { FormItem } from './FormHelpers';
import StatesDropdown from './StatesDropdown';
import AppContext from './AppContext';

const ShippingAddressForm = ({ setForm, formData, navigation }) => {
  const {
    billingFirstName,
    billingLastName,
    billingAddress,
    billingCity,
    billingState,
    billingZip,
    shippingSameAsBilling,
    shippingFirstName,
    shippingLastName,
    shippingAddress,
    shippingCity,
    shippingState,
    shippingZip,
  } = formData;
  const { previous, next, go } = navigation;
  const { isReviewMode } = useContext(AppContext);

  const fields = [
    {
      label: 'Same as Billing',
      name: 'shippingSameAsBilling',
      checked: shippingSameAsBilling,
      type: 'checkbox',
    },
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
      <h2>Shipping Address</h2>

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
          <>
            <button onClick={previous}>Prev</button>
            <button onClick={next}>Next</button>
          </>
        )}
      </div>
    </div>
  );
};

export default ShippingAddressForm;
