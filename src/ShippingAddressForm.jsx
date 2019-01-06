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
          <button type="button" onClick={() => go('review')}>
            Review Order
          </button>
        ) : (
          <React.Fragment>
            <button type="button" onClick={previous}>
              Prev
            </button>
            <button type="button" onClick={next}>
              Next
            </button>
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

export default ShippingAddressForm;
