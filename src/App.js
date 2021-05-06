import React from "react";
import Stripe from "react-stripe-checkout";
import axios from "axios";

function App() {
  async function handleToken(token) {
    console.log(token);
    await axios
      .post("http://localhost:8080/api/payment/charge", "", {
        headers: {
          token: token.id,
          amount: 500,
        },
      })
      .then(() => {
        alert("Payment Success");
      })
      .catch((error) => {
        alert(error);
      });
  }

  return (
    <div className="App">
      <Stripe
        stripeKey="*************************************"
        token={handleToken}
      />
    </div>
  );
}

export default App;
