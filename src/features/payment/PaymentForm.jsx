import { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useLoaderData } from "react-router-dom";

import Button from "../../ui/Button";
import { useUser } from "../authentication/useUser";
import SpinnerMini from "../../ui/SpinnerMini";

const PaymentForm = () => {
  const order = useLoaderData();

  const { user } = useUser();
  const { fullName } = user.user_metadata;

  const { orderPrice, priorityPrice } = order;

  const stripe = useStripe();
  const elements = useElements();
  const amount = orderPrice + priorityPrice;
  const currentUser = fullName;
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const paymentHandler = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    setIsProcessingPayment(true);
    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: amount * 100 }),
    }).then((res) => {
      return res.json();
    });
    console.log(response);

    const clientSecret = response.paymentIntent.client_secret;

    const paymentResult = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser ? currentUser.displayName : "Guest",
        },
      },
    });

    setIsProcessingPayment(false);

    if (paymentResult.error) {
      alert(paymentResult.error.message);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        alert("Payment Successful!");
      }
    }
  };

  return (
    <div className="-m-16 flex h-[300px] flex-col items-center justify-center">
      <form
        className="h-[100px] min-w-[500px] space-y-8"
        onSubmit={paymentHandler}
      >
        <h2>Credit Card Payment:</h2>
        <CardElement />
        <Button type="primary" isLoading={isProcessingPayment}>
          {!isProcessingPayment ? "Pay Now" : <SpinnerMini />}
        </Button>
      </form>
    </div>
  );
};
export default PaymentForm;
