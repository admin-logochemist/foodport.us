/* eslint-disable react-hooks/rules-of-hooks */
import React,{useState} from 'react';
import Head from 'next/head'
import Header from './Header';
import Sidebar from './user_sidebar';
import Footer from './Footer';
import ordr_style from '../styles/your_orders.module.css'
function userorders() {
    const [orders, setstate] = useState("")
  return (
  <>
          <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
       <link rel="icon" href="/icon-06.png" /> 
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" />
          <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" rel="stylesheet" />
        </Head>

        <main>
            <Header />
            <Sidebar />

            <div className="container-fluid border p-5" id={`${ordr_style.margin}`}>
                <span className={ordr_style.orders}>Order</span>
                <span className={ordr_style.orders}>17 Orders</span>

                {/* <div className="row justify-content-center">
                    <div className="col-lg-3 col-md-4 mt-5" id={ordr_style.flex_item}>
                        <div className={ordr_style.card}>              
                            <img className={ordr_style.img} src="/img/a.jpg"/>
                            <span className={ordr_style.between_br}></span>
                            <div className={ordr_style.content}>
                                <p>Fresh Mozzarella, Sauce, Basil
                                </p>
                                <p>Fresh Mozzarella, Sauce, Basil</p>
                                <div className={ordr_style.icons}>
                                <span><i className="fas fa-tags"></i> $10205</span>
                                <span><i className="fas fa-calendar-week"></i> January 7th 2022, 5:31 PM</span>
                                </div>
                            </div>
                            </div>
                    </div>
                    <div className="col-lg-3 col-md-4 mt-5" id={ordr_style.flex_item}>
                        <div className={ordr_style.card}>              
                            <img className={ordr_style.img} src="/img/a.jpg"/>
                            <span className={ordr_style.between_br}></span>
                            <div className={ordr_style.content}>
                                <p>Fresh Mozzarella, Sauce, Basil
                                </p>
                                <p>Fresh Mozzarella, Sauce, Basil</p>
                                <div className={ordr_style.icons}>
                                <span><i className="fas fa-tags"></i> $10205</span>
                                <span><i className="fas fa-calendar-week"></i> January 7th 2022, 5:31 PM</span>
                                </div>
                            </div>
                            </div>
                    </div>
                    <div className="col-lg-3 col-md-4 mt-5" id={ordr_style.flex_item}>
                        <div className={ordr_style.card}>              
                            <img className={ordr_style.img} src="/img/a.jpg"/>
                            <span className={ordr_style.between_br}></span>
                            <div className={ordr_style.content}>
                                <p>Fresh Mozzarella, Sauce, Basil
                                </p>
                                <p>Fresh Mozzarella, Sauce, Basil</p>
                                <div className={ordr_style.icons}>
                                <span><i className="fas fa-tags"></i> $10205</span>
                                <span><i className="fas fa-calendar-week"></i> January 7th 2022, 5:31 PM</span>
                                </div>
                            </div>
                            </div>
                    </div>
                    <div className="col-lg-3 col-md-4 mt-5" id={ordr_style.flex_item}>
                        <div className={ordr_style.card}>              
                            <img className={ordr_style.img} src="/img/a.jpg"/>
                            <span className={ordr_style.between_br}></span>
                            <div className={ordr_style.content}>
                                <p>Fresh Mozzarella, Sauce, Basil
                                </p>
                                <p>Fresh Mozzarella, Sauce, Basil</p>
                                <div className={ordr_style.icons}>
                                <span><i className="fas fa-tags"></i> $10205</span>
                                <span><i className="fas fa-calendar-week"></i> January 7th 2022, 5:31 PM</span>
                                </div>
                            </div>
                            </div>
                    </div>
                    <div className="col-lg-3 col-md-4 mt-5" id={ordr_style.flex_item}>
                        <div className={ordr_style.card}>              
                            <img className={ordr_style.img} src="/img/a.jpg"/>
                            <span className={ordr_style.between_br}></span>
                            <div className={ordr_style.content}>
                                <p>Fresh Mozzarella, Sauce, Basil
                                </p>
                                <p>Fresh Mozzarella, Sauce, Basil</p>
                                <div className={ordr_style.icons}>
                                <span><i className="fas fa-tags"></i> $10205</span>
                                <span><i className="fas fa-calendar-week"></i> January 7th 2022, 5:31 PM</span>
                                </div>
                            </div>
                            </div>
                    </div>
                    <div className="col-lg-3 col-md-4 mt-5" id={ordr_style.flex_item}>
                        <div className={ordr_style.card}>              
                            <img className={ordr_style.img} src="/img/a.jpg"/>
                            <span className={ordr_style.between_br}></span>
                            <div className={ordr_style.content}>
                                <p>Fresh Mozzarella, Sauce, Basil
                                </p>
                                <p>Fresh Mozzarella, Sauce, Basil</p>
                                <div className={ordr_style.icons}>
                                <span><i className="fas fa-tags"></i> $10205</span>
                                <span><i className="fas fa-calendar-week"></i> January 7th 2022, 5:31 PM</span>
                                </div>
                            </div>
                            </div>
                    </div>
                    <div className="col-lg-3 col-md-4 mt-5" id={ordr_style.flex_item}>
                        <div className={ordr_style.card}>              
                            <img className={ordr_style.img} src="/img/a.jpg"/>
                            <span className={ordr_style.between_br}></span>
                            <div className={ordr_style.content}>
                                <p>Fresh Mozzarella, Sauce, Basil
                                </p>
                                <p>Fresh Mozzarella, Sauce, Basil</p>
                                <div className={ordr_style.icons}>
                                <span><i className="fas fa-tags"></i> $10205</span>
                                <span><i className="fas fa-calendar-week"></i> January 7th 2022, 5:31 PM</span>
                                </div>
                            </div>
                            </div>
                    </div>
                </div> */}
            </div>
            
            <Footer />
        </main>

  </>
  );
}

export default userorders;
export async function getServerSideProps(context){
    const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
    const session=getSession(context);
    if(!session){
        return {
            props:{},
        };

    }
    const stripeOrders=await onSnapshot(
        query(collection(db,"users")),  (snapshot)=>{setOrders(snapshot.docs)
        console.log("getFood", snapshot.docs);
        }
        
        )
}