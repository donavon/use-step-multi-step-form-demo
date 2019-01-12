import React from 'react';

const ConfirmationForm = ({ formData }) => (
  <div className="form">
    <h2>Order Submitted</h2>
    <p>
      Your confirmation number is
      <br />
      <b>RCW-02-898-776</b>
    </p>
    <p>Thank you for your order!</p>
    <pre className="w3-container w3-light-grey">
      {JSON.stringify(formData, null, 2)}
    </pre>
  </div>
);

export default ConfirmationForm;
