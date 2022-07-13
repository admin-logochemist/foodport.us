/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Header from './Header';
import Footer from './Footer';
import CheckoutPro from './CheckoutPro'
import { selectItems, selectTotal } from '.././components/features/BasketSlice';


import { useSelector } from 'react-redux'

function basket_item() {
    const items = useSelector(selectItems);
    const total = useSelector(selectTotal);
  return(
      <>

        <Head>
            <title>Food Port</title>
            <meta name="description" content="Generated by create next app" />
         <link rel="icon" href="/icon-06.png" /> 
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" />
            <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" rel="stylesheet" />
        </Head>


       <main>

       <Header />

       <div className="checkout_top">
            <div className="container">
                <div className="row mt-5 flex_row">

                    <div className="col-lg-6 col-md-6 p-3 box-left">
                        <h4 className="shop_head">Your Shopping Basket</h4>
                        <span className="check_borderr"></span>
                   
                   <Link  href="/"><button className="shop_bttn">Continue Shopping</button></Link>
                    </div>

                    <div className="col-lg-6 col-md-6 p-3 box-right">
                        <h4 className="proceed_head">SUBTOTAL [{items.length}]: <span>${total}</span></h4>
                        <span className="check_borderr"></span>
                        <Link href="/check_out"><button className="shop_bttn">Proceed To CheckOut</button></Link>
                    </div>

                </div>
            </div>
       </div>

       <div className="container-fluid">
         <div className="row mt-4">
                {items && items?.length ? items.map((item, i) => {
                    return <CheckoutPro
                        key={i}
                        img={item?.image || ''}
                        title={item?.title||''} 
                        price={item?.price||''}
                        itemid={item?.itemid||''}
                        remail={item?.remail||''}
                        quantity={item?.quantity ? item?.quantity : 1}
                        price_total={item.price_total||''}
                        description={item?.description}
                        useremail={item?.email}
                    />
                }
                ) : null}
                {console.log("CartItems",items)}
           
         </div>
       
      </div>
        
        <Footer />
       </main>

      </>
  );
}

export default basket_item;
