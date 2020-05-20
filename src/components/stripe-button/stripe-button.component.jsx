import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_4LQrsBnm2j26ApaFZDyYz2jr00NvK6gty3";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Kupi"
      name="NT Company"
      billingAddress
      shippingAddress
      image=""
      description={`Ukupan iznos za uplatu ${price} din`}
      amount={priceForStripe}
      panelLabel="Kupi sada"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
