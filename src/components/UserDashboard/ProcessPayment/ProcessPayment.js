import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import {CardElement} from '@stripe/react-stripe-js';
import MyCheckoutForm from './MyCheckoutForm';
const stripePromise = loadStripe('sk_test_51Ie1L6DJGTm3SWx8ILZZdGB2IvVf80ejO29N84yQVqSJqv1wh6lIzD4WUCu3vSQh1I1HMIw2HKGUTodsN6hDb2um00Kh4Qgj78');
const ProcessPayment = () => {
    return (
        <Elements stripe={stripePromise}>
             {/* <MyCheckoutForm></MyCheckoutForm> */}
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
        </Elements>
        
    );
};

export default ProcessPayment;