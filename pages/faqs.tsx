
import Head from 'next/head'
import Footer from './Footer';
import Header from './Header';
import resstyle from '../styles/resbox.module.css';
function faqs() {
    return (
        <>

            <Head>
                <title>Food Port</title>
                <meta name="description" content="Generated by create next app" />
             <link rel="icon" href="/icon-06.png" /> 
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" />
                <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" rel="stylesheet" />
            </Head>

            <Header />
            <div className='banner-about'>
                <div className='banner-text'>
                    <h3 className='banner-text'>FAQS | FOODPORT </h3>
                </div>



            </div>
            <div className='container'>
                <br />
                <br />
                <h4><b>Do you have any questions? Is there anything we can help you with?</b></h4>
                <h6>We collected the most common questions to help you.p</h6>
                <p>Even when on the move, the free foodport mobile application for iOS, Android and Windows Phone, allows you to order food and groceries online anytime from anywhere. Whichever food you currently desire, we have the largest selection of restaurants for you to choose from, right here on foodport!	 <br />
                    <br /> In three words, the process of ordering food & grocery online is simple, fast, and convenient. </p>
                <br />
                <h4> <b>Can I cancel my order?</b></h4>
                <p>Call the restaurant to change the order. After leaving the supplier is not possible to change. <br /><br />

                    With regards to any refund of a payment you have made online, you must always contact us and not the restaurant.</p>

            </div>





            <Footer />
        </>
    );
}

export default faqs;