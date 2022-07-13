/* eslint-disable react/jsx-no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { addToBasket } from '.././components/features/BasketSlice';
import Food from '../styles/FoodItems.module.css'  
import Image from 'next/image';
import Head from 'next/head'


function ResFood({obj}) {
  const dispatch = useDispatch();
  const addItemsToBasket = () => {
    const product = obj.data()   
    dispatch(addToBasket(product))

}
  return (

    <>
         <Head>
                 <title>Food Items</title>
                 <meta name="description" content="Generated by create next app" />
              <link rel="icon" href="/icon-06.png" /> 
                 <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" />
                  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" rel="stylesheet" />
         </Head>  
                     <div className="container-fluid">
                         <div className="row mt-5 justify-content-center">
                            
                           <div className="col-lg-3" id={`${Food.own_col_food}`}>
                                 <div className={`${Food.fooditem_box}`}>
                                     <div className={`${Food.fooditem_icon}`}>
                                        <img src={obj?.data().image}/> 
                                     </div>
                                     <div className={`${Food.fooditem_details}`}>
                                     <h2 className={`${Food.title}`}>{obj?.data().title}</h2>
                                   <span className={`${Food.post}`}>{obj?.data().type}</span>
                                   <h6 className={`${Food.price_tag}`}>${obj?.data().price}</h6>
                               </div>
                                 </div>
                             </div>
                         </div>
                     </div>
                 
    </>
  )
}

export default ResFood