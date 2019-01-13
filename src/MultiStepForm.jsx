import React from 'react';
import { useForm, useStep } from 'react-hooks-helper';

import BillingAddressForm from './BillingAddressForm';
import ShippingAddressForm from './ShippingAddressForm';
import ShippingMethodForm from './ShippingMethodForm';
import ReviewForm from './ReviewForm';
import ConfirmationForm from './ConfirmationForm';

const steps = [
  { id: 'billing-address', Component: BillingAddressForm },
  { id: 'shipping-address', Component: ShippingAddressForm },
  { id: 'shipping-method', Component: ShippingMethodForm },
  { id: 'set-review', Component: ReviewForm },
  { id: 'review', Component: ReviewForm },
  { id: 'confirmation', Component: ConfirmationForm },
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

const MultiStepForm = () => {
  const [formData, setForm] = useForm(defaultData);
  const { step, navigation } = useStep({ initialStep: 0, steps });
  const { Component } = step;
  const props = { formData, setForm, navigation };

  return <Component {...props} />;
};

export default MultiStepForm;
