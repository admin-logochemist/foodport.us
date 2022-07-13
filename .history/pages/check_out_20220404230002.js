/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-key */
import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import Footer from './Footer';
import Header from './Header';
import { db } from "../firebase";
import { useSelector } from "react-redux";
import CheckoutProduct from "./CheckoutProduct";
import { selectItems, selectTotal } from './features/BasketSlice';
import { selectUser } from '../pages/features/UserSlice';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';


const check_out = () => {
    const user = useSelector(selectUser)
    const items = useSelector(selectItems)
     const total = useSelector(selectTotal)
     const stripePromise=loadStripe(process.env.stripe_public_key)
     const createCheckoutSession=async()=>{
         const stripe = await stripePromise;
         const CheckoutSession = await axios.post('/api/create-checkout-session',
         {
             items:items,
             email:"ghayas110#mail.com"
         })
     }
//     const basket = useSelector(selectItems)
//     const history = useHistory
//     const stripe = useStripe
//     const elements = useElements
//     const [succeeded, setSucceeded] = useState(false);
//     const [processing, setProcessing] = useState("");
//     const [error, setError] = useState(null);
//     const [disabled, setDisabled] = useState(true);
//     const [clientSecret, setClientSecret] = useState(true);
//     const [Name, setName] = useState("")
//     const [phone, setPhone] = useState("")
//     const [country, setCountry] = useState("")
//     const [Zipcode, setZipCode] = useState("")
//     const [state, setState] = useState("")
//     const [address, setAddress] = useState("")
//     const clientSecretS = (clientSecret).toString
//     useEffect(() => {
//         // generate the special stripe secret which allows us to charge a customer
//         const getClientSecret = async () => {
//             const response = await axios({
//                 method: 'post',
//                 // Stripe expects the total in a currencies subunits
//                 url: `/payments/create?total=${total}`
//             });
//             setClientSecret(response.data.clientSecret)
//         }

//         getClientSecret();
//     }, [basket])

//     console.log('THE SECRET IS >>>', clientSecret)
//     console.log('👱', user)

//     const handleSubmit = async (event) => {
//         // do all the fancy stripe stuff...
//         event.preventDefault();
//         setProcessing(true);

//         const payload = await stripe.confirmCardPayment(clientSecret, {
//             payment_method: {
//                 card: elements.getElement(CardElement)
              
//             }
        
//         }).then(({ paymentIntent }) => {
//             // paymentIntent = payment confirmation
// {console.log('Stripe',CardElement)}
//             db
//               .collection('users')
//               .doc(user?.uid)
//               .collection('orders')
//               .doc(paymentIntent.id)
//               .set({
//                   user:user?.email,
//                   name:user?.displayName,
//                   country:country,
//                   zipcode:Zipcode,
//                   basket: basket,
//                   state:state,
//                   phone:phone,
//                   address,address,
//                   amount: paymentIntent.amount,
//                   created: paymentIntent.created
//               })

//             setSucceeded(true);
//             setError(null)
//             setProcessing(false)

          

//             history.replace('/orders')
//         })

//     }

//     const handleChange = event => {
//         // Listen for changes in the CardElement
//         // and display any errors as the customer types their card details
//         setDisabled(event.empty);
//         setError(event.error ? event.error.message : "");
//     }
    return (
        <>

            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
             <link rel="icon" href="/icon-06.png" /> 
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" />
                <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" rel="stylesheet" />
            </Head>

            <Header />

            <div className="checkout_banner"></div>

            <div className="containerrs mt-5">
                <div className="main_container_form">
                    <h6 className="rder-head">Your Order</h6>
                    <div className="items_container">

                        <div className="itemsss">
                        {items.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                description={item.description}
                                img={item.image}
                                price={item.price}
                                rating={item.rating}
                                _id={item._id}
                                quantity={item.quantity}
                                price_total={item.price_total}
                            />
                        ))}
                        </div>

                    </div>

                    <div className="">
                        <span className="itemss_borderss" ></span>
                        <div className="itemss_totals">
                            <h4>Total : <span className="order_items_totals">${total}</span> </h4>
                        </div>
                        <span className="itemss_borderss"></span>

                        <div className="peyment-method">
                            <h6>Payment Method</h6>
                            <ul className="card-area">
                                <li>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="payments" id="flexRadioDefault1" />
                                        <label className="form-check-label" >
                                        </label>
                                    </div>
                                    <div className="details">
                                        <h6>Credit Cart <img src="./img/peyment-card.png" alt="img" /></h6>
                                        <p>Pay with visa, Anex, MasterCard, Maestro,Discover and many other credit and debit credit vai paypal</p>
                                    </div>
                                </li>
                            </ul>

                            <div className="col-md-12">
                                <label className="mt-3">Card Number</label>
                                <div className="single-input-wrap">
                                    <input type="text" className="form-control" placeholder="Card Number" />
                                </div>
                            </div>
                        </div>
                        <button className="orderBtn" onClick={createCheckoutSession}>Place Order</button>
                    </div>
                </div>

                <div className="bill-payment-wrap">
                    <h5 className="billing-system-head">Billing Details
                    </h5>
                    <form className="default-form-wrap style-2">
                        <div className="row">
                            <div className="col-md-6">
                                <label>Full Name</label>
                                <div className="single-input-wrap">
                                    <input type="text" className="form-control" placeholder="Full Name" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <label>Email Address</label>
                                <div className="single-input-wrap">
                                    <input type="email" className="form-control" placeholder="Email Address" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <label className="mt-3">Phone No</label>
                                <div className="single-input-wrap">
                                    <input type="text" className="form-control" placeholder="Phone No" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <label className="mt-3">Country</label>
                                <div className="single-input-wrap">
                                    <input type="text" className="form-control" placeholder="Type Your Country" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <label className="mt-3">Zip Code</label>
                                <div className="single-input-wrap">
                                    <input type="text" className="form-control" placeholder="Zip Code" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <label className="mt-3">State</label>
                                <div className="single-input-wrap">
                                    <input type="text" className="form-control" placeholder="State" />
                                </div>
                            </div>
                            <div className="col-md-12">
                                <label className="mt-3">Country</label>
                                <div className="single-input-wrap">
                                    <input type="text" className="form-control" placeholder="Type Your Country" />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>


            <Footer />
        </>
    )
}

export default check_out;
