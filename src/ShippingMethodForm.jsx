import React, { useContext } from 'react';

import { FormItem } from './FormHelpers';
import shippingMethods from './shippingMethods';
import AppContext from './AppContext';

const ShippingMethodForm = ({ setForm, formData, navigation }) => {
  const { shippingMethod } = formData;
  const { previous, next, go } = navigation;
  const { isReviewMode } = useContext(AppContext);

  return (
    <div className="form">
      <h3>Shipping Method</h3>

      {Object.entries(shippingMethods).map(([value, name]) => (
        <FormItem
          key={value}
          label={name}
          name="shippingMethod"
          value={value}
          checked={shippingMethod === value}
          onChange={setForm}
          type="radio"
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
              ‹ Shipping Address
            </button>
            <button
              className="w3-button w3-white w3-border w3-right"
              type="button"
              onClick={next}
            >
              Review Order ›
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ShippingMethodForm;
