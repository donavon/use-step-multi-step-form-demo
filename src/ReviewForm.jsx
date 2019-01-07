import React from 'react';

import shippingMethods from './shippingMethods';

const ReviewSection = ({ title, children, onClick }) => (
  <>
    <h4>
      {title}
      <button
        type="button"
        className="w3-button w3-small w3-padding-small w3-border w3-white"
        onClick={onClick}
      >
        edit
      </button>
    </h4>
    <div className="w3-margin-left">{children}</div>
  </>
);

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
      <h3>Order Review</h3>

      <ReviewSection
        title="Billing Address"
        onClick={() => go('billing-address')}
      >
        <div>{`${billingFirstName} ${billingLastName}`}</div>
        <div>{billingAddress}</div>
        <div>{`${billingCity}, ${billingState} ${billingZip}`}</div>
      </ReviewSection>

      <ReviewSection
        title="Shipping Address"
        onClick={() => go('shipping-address')}
      >
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
      </ReviewSection>

      <ReviewSection
        title="Shipping Method"
        onClick={() => go('shipping-method')}
      >
        <div>{`${shippingMethods[shippingMethod]}`}</div>
      </ReviewSection>

      <div className="w3-bar">
        <button
          className="w3-button w3-blue w3-border w3-right"
          type="button"
          onClick={() => go('confirmation')}
        >
          Submit Order
        </button>
      </div>
    </div>
  );
};

export default ReviewForm;
