import React from 'react';

import shippingMethods from './shippingMethods';

const ReviewForm = ({ formData, navigation }) => {
  const {
    billingFirstName,
    billingLastName,
    billingAddress,
    billingCity,
    billingState,
    billingZip,
    shippingMethod,
    shippingSameAsBilling,
    shippingFirstName,
    shippingLastName,
    shippingAddress,
    shippingCity,
    shippingState,
    shippingZip,
  } = formData;
  const { go } = navigation;

  return (
    <div className="form">
      <h2>Order Review</h2>

      <h3>
        Billing Address
        <button
          type="button"
          className="small"
          onClick={() => go('billing-address')}
        >
          edit
        </button>
      </h3>
      <div>{`${billingFirstName} ${billingLastName}`}</div>
      <div>{billingAddress}</div>
      <div>{`${billingCity}, ${billingState} ${billingZip}`}</div>

      <h3>
        Shipping Address
        <button
          type="button"
          className="small"
          onClick={() => go('shipping-address')}
        >
          edit
        </button>
      </h3>
      {shippingSameAsBilling ? (
        <React.Fragment>
          <div>{`${billingFirstName} ${billingLastName}`}</div>
          <div>{billingAddress}</div>
          <div>{`${billingCity}, ${billingState} ${billingZip}`}</div>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <div>{`${shippingFirstName} ${shippingLastName}`}</div>
          <div>{shippingAddress}</div>
          <div>{`${shippingCity}, ${shippingState} ${shippingZip}`}</div>
        </React.Fragment>
      )}

      <h3>
        Shipping Method
        <button
          type="button"
          className="small"
          onClick={() => go('shipping-method')}
        >
          edit
        </button>
      </h3>
      <div>{`${shippingMethods[shippingMethod]}`}</div>

      <div className="navigation">
        <button type="button" onClick={() => go('confirmation')}>
          Submit Order
        </button>
      </div>
    </div>
  );
};

export default ReviewForm;
