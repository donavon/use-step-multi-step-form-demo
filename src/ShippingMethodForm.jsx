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
      <h2>Shipping Method</h2>

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

export default ShippingMethodForm;
