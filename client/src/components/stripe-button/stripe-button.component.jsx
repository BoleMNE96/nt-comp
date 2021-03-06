import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_4LQrsBnm2j26ApaFZDyYz2jr00NvK6gty3";

  const onToken = (token) => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token: token
      }
    })
      .then((response) => {
        alert("Payment successful");
      })
      .catch((error) => {
        console.log("Payment error: ", error);
        alert(
          "There was an issue with your payment. Please make sure you use the provided credit card."
        );
      });
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
