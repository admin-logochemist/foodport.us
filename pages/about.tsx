
import Head from 'next/head'
import Footer from './Footer';
import Header from './Header';
import resstyle from '../styles/resbox.module.css';
function about() {
    return (
        <>

            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" />
                <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" rel="stylesheet" />
            </Head>

            <Header />
                <div className='banner-about'>
                    <div className='banner-text'>
                        <h3 className='banner-text'>ABOUT US | FOODPORT </h3>
                    </div>
                    


                </div>
                <div className='container'>
                    <br />
                    <br />
                    <h4><b>Get To Know foodport</b></h4>
                    <h6>Order food and grocery online with the foodport app</h6>
                    <p>Even when on the move, the free foodport mobile application for iOS, Android and Windows Phone, allows you to order food and groceries online anytime from anywhere. Whichever food you currently desire, we have the largest selection of restaurants for you to choose from, right here on foodport!	 <br />
                    <br /> In three words, the process of ordering food & grocery online is simple, fast, and convenient. </p>
                    <br />
                    <h4> <b>How to Order</b></h4>
                    <p>To order food delivery in Pakistan, follow these simple steps:</p>
                    <ol>
                        
                        <li>Find a restaurant. Enter your delivery address in the location form to see all the places that deliver to your location. It can be your home, office, a hotel or even parks!</li> <br />
                        <li>Choose your dishes. Browse the menu of the chosen restaurant, select your dishes and add them to your basket. When you are done, press the "Review Payment & Address" button.</li> <br />
                        <li>Checkout & Payment. Check your order, payment method selection and exact delivery address. Simply follow the checkout instructions from there.</li> <br />
                        <li>Delivery. We will send you an email and SMS confirming your order and delivery time. Sit back, relax and wait for piping hot food to be conveniently delivered to you!.</li> <br />
                    </ol>
                    <p>How to Contact foodport</p>
                    <br />
                    <p>If you wish to contact us regarding any questions or comments you may have, please send an email to support@foodport.pk or connect with us via our inbuilt help center.</p>

                    </div>


            

            
            <Footer />
        </>
    );
}

export default about;