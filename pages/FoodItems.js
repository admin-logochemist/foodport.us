/* eslint-disable react/jsx-key */
import React, { useState,useEffect } from 'react'
import Head from 'next/head'

import DCss from '../styles/dashboard.module.css'
import Image from 'next/image'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { db } from '../firebase'
import {Resinfo} from '../components/Resinfo'
function FoodItems() {
    const [foodcart, setFoodcart] = useState("")
    useEffect(() => {
      getResturant();
    }, [])
  const getResturant = () => {
    onSnapshot(
query(collection(db,"foodcart")),  (snapshot)=>{setFoodcart(snapshot.docs)
console.log(snapshot.docs);
}

)

  }
  const renderResturant = () => {
    if (foodcart && foodcart?.length) {
    return foodcart.map((item, index) => {
      return <Resinfo
        obj={item}
      />
      
    })
    }else{
        <h1 style={{display:'flex',justifyContent:"center",alignItems:"center"}}>No Foodcart</h1>
    }
  }
  return (
    <>
         <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" />
                <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" rel="stylesheet" />
        </Head>

        <main>
         
            <div className="container-fluid" id={`${DCss.main_container}`}>
                <div className="row justify-content-center">
                 
                {renderResturant()} 
                </div>
            </div>
        </main>
    </>
  )
}

export default FoodItems;