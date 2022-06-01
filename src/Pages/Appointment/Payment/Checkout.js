import React, { useEffect, useState } from 'react';
import {useStripe, useElements, PaymentElement, CardElement} from '@stripe/react-stripe-js';
import UseAuth from '../../../Hook/UseAuth';
import { CircularProgress } from '@mui/material';
const Checkout = ({appointments}) => {
    const { price, patientName, _id } = appointments;
    const {user} = UseAuth();
    const stripe = useStripe();
    const elements = useElements();
    const [success,setSuccess] = useState();
    const [error, setError] = useState();
    const [processing, setProcessing] = useState(false);
    const [clientSecret, setClientSecret] = useState('');

    useEffect(() => {
        fetch('http://localhost:5000/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ price })
        })
            .then(res => res.json())
            .then(data => setClientSecret(data.clientSecret));
    }, [price]);



    const handleSubmit = async (event) => {
        // We don't want to let default form submission happen here,
        // which would refresh the page.
        event.preventDefault();
        const card = elements.getElement(CardElement);
        if (!stripe || !elements) {
         
          return;
        }
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
          });
          if (error) {
            setSuccess('')
            
            setError(error.message)
            console.log('[error]', error);
          } else {
            setError('')
           setSuccess('Your payment processed successfully.')
            
            console.log('[PaymentMethod]', paymentMethod);
          }
          const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: patientName,
                        email: user.email
                    },
                },
            },
        );

        if (intentError) {
            setError(intentError.message);
            setSuccess('');
        }
        else {
            setError('');
            setProcessing(false);
            alert("Your Payment Succesfull")
            setSuccess('Your payment processed successfully.')
            console.log(paymentIntent);
            
            // save to database
            const payment = {
                amount: paymentIntent.amount,
                created: paymentIntent.created,
                last4: paymentMethod.card.last4,
                transaction: paymentIntent.client_secret.slice('_secret')[0]
            }
            const url = `http://localhost:5000/appointments/${_id}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                  console.log(data)});
        }
    
        
      };
    return (
        <div>
            <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
     {processing ? <CircularProgress></CircularProgress> : <button type="submit" >
                    Pay ${price}
                </button>}
    </form>
    {
                error && <p style={{ color: 'red' }}>{error}</p>
            }
            {
                success && <p style={{ color: 'green' }}>{success}</p>
            }
             
        </div>
    );
};

export default Checkout;