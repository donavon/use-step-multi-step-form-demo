import React from 'react';
import { useForm, useStep } from 'react-hooks-helper';

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
  billing: {
    firstName: 'Jane',
    lastName: 'Doe',
    address: '200 South Main St',
    city: 'Anytown',
    state: 'CA',
    zip: '90505',
  },
  shippingSameAsBilling: false,
  shipping: {
    firstName: 'John',
    lastName: 'Smith',
    address: '100 North Road Rd',
    city: 'Othertown',
    state: 'NY',
    zip: '10101',
  },
  shippingMethod: 'FREE',
};

const mapIdToComponent = {
  'billing-address': BillingAddressForm,
  'shipping-address': ShippingAddressForm,
  'shipping-method': ShippingMethodForm,
  'set-review': ReviewForm,
  review: ReviewForm,
  confirmation: ConfirmationForm,
};

const MultiStepForm = () => {
  const [formData, setForm] = useForm(defaultData);
  const { step, navigation } = useStep({ initialStep: 0, steps });
  const { id } = step;

  const props = { formData, setForm, navigation };

  const Component = mapIdToComponent[id];
  if (!Component) {
    throw new Error(`Invalid step id: "${id}"`);
  }
  return <Component {...props} />;
};

export default MultiStepForm;
