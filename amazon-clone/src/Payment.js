import React, { useState, useEffect } from 'react'
import './Payment.css'
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
// import { Link } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { getBasketTotal } from './reducer';
import CurrencyFormat from "react-currency-format";
import axios from './axios';
import { db } from './firebase';

function Payment () {

    const [{ basket, user }, dispatch] = useStateValue();
    const history = useHistory();

    const stripe = useStripe();
    const Elements = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [processinjg, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        //generate the special stripe secret which allows us to charge a customer
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                //Stripe expects the total in a currencies subunits
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret();
    }, [basket])

    console.log("The secret is", clientSecret)


    const handleSubmit = async (event) => {
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: Elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            //paymentIntent = payment confirmation
            db.collection('users').doc(user ?.uid).collection('orders').doc(paymentIntent.id)
                .set({
                    basket: basket,
                    amount: paymentIntent.amount,
                    created: paymentIntent.created
                })


            setSucceeded(true);
            setError(null);
            setProcessing(false)

            dispatch({
                type: 'EMPTY_BASKET'
            })

            history.replace('/orders');
        })


    }

    const handleChange = e => {
        //Listen for changes in the CardElement
        //display any errors as the customer types their card details
        setDisabled(e.empty);
        setError(e.error ? e.error.message : "");

    }



    return (
        <div className="payment">
            <div className="payment__container">
                <h1>
                    Checkout(<Link to="/checkout">{basket ?.length} items</Link>)
                </h1>
                {/*Payment address */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user ?.email}</p>
                        <p>5309 N Macurther Blvd</p>
                        <p>Irving,Texas</p>
                    </div>
                </div>

                {/*Payment Review section */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="payment__items">
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>

                {/*Stripe functionality here */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange=
                                {handleChange}
                            />

                            <div className="payment__priceContainer">
                                <CurrencyFormat
                                    renderText={(value) => (<h3>Order Total:{value}</h3>)}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeperator={true}
                                    prefix={"$"}
                                />

                                <button disabled={processinjg || disabled || succeeded}><span>{processinjg ? <p>processinjg</p> : "Buy Now"}</span></button>
                            </div>
                            {/* Errors */}
                            {error && <div>{error}</div>}
                        </form>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Payment
