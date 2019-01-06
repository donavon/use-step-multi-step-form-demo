import React, { useContext } from 'react';
import { useForm, useStep } from 'react-hooks-helper';

import AppContext from './AppContext';
import BillingAddressForm from './BillingAddressForm';
import ShippingAddressForm from './ShippingAddressForm';
import ShippingMethodForm from './ShippingMethodForm';
import ReviewForm from './ReviewForm';
import ConfirmationForm from './ConfirmationForm';

const steps = [
  { id: 'billing-address' },
  { id: 'shipping-address' },
  { id: 'shipping-method' },
  { id: 'set-review' },
  { id: 'review' },
  { id: 'confirmation' },
];

const defaultData = {
  billingFirstName: 'Jane',
  billingLastName: 'Doe',
  billingAddress: '200 South Main St',
  billingCity: 'Anytown',
  billingState: 'CA',
  billingZip: '90505',
  shippingSameAsBilling: false,
  shippingFirstName: 'John',
  shippingLastName: 'Smith',
  shippingAddress: '100 North Road Rd',
  shippingCity: 'Othertown',
  shippingState: 'NY',
  shippingZip: '10101',
  shippingMethod: 'FREE',
};

const MultiStepForm = () => {
  const [formData, setForm] = useForm(defaultData);
  const { step, navigation } = useStep({ initialStep: 0, steps });
  const { id } = step;

  const props = { formData, setForm, navigation };
  const appContext = useContext(AppContext);

  switch (id) {
    case 'billing-address':
      return <BillingAddressForm {...props} />;
    case 'shipping-address':
      return <ShippingAddressForm {...props} />;
    case 'shipping-method':
      return <ShippingMethodForm {...props} />;
    case 'set-review':
      appContext.isReviewMode = true;
      return <ReviewForm {...props} />;
    case 'review':
      return <ReviewForm {...props} />;
    case 'confirmation':
      return <ConfirmationForm {...props} />;
    default:
      throw new Error(`Invalid step id: "${id}"`);
  }
};

export default MultiStepForm;
