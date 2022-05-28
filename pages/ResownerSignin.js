/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React,{useEffect, useState} from 'react';
import form_style from '../styles/form.module.css'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { login, logout,} from '.././components/features/UserSlice';
import { onAuthStateChanged, signInWithEmailAndPassword,getAuth } from 'firebase/auth';

import { route } from 'next/dist/server/router';
import { app } from '../firebase';

function ResownerSignin() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const router = useRouter();
    const auth = getAuth(app);
    useEffect(async () => {
      auth.onAuthStateChanged(async (userAuth) => {
        if (userAuth) {
          dispatch(login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
          }))

        } else {
          dispatch(logout)
        }
      })
    }, [])
    // const user = auth.currentUser;
    const logintoApp = (e) => {
      e.preventDefault()
      signInWithEmailAndPassword(auth,email, password).then((userAuth) => {
        dispatch(login({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: userAuth.user.displayName,
        }))
      })
        if (auth.currentUser !== null) {
          router.push('./ResturentOwner')
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

        <div className={form_style.form_img}>
            <div className={form_style.main_from}>
                <div className={form_style.upper_div}></div>    
            </div>
   
          <form >
          <span className={form_style.center_logo}><a href="./"><img src="/img/logologo.f87723ea.png" alt="" className={form_style.form_logo}/></a> </span>
            <div className="row justify-content-center" id={form_style.form_row}>
                <div className="col-lg-10">
                    <h3 className="text-center"> Sign In</h3>
                    <br />
                    <div className={form_style.icons_group}>
                        <img src="/img/signin.png" alt="" />
                        <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Your Email Address" />
                    </div>
                    <div className={`${form_style.icons_group}`}>
                        <img src="/img/password.png" alt="" />
                        <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Your Password" />
                    </div>
                    <br />
                    <br />
                    <button className={form_style.form_btns} onClick={logintoApp}>LOGIN</button>  
                    <br />
                    <div className={form_style.btns_div}>Not a Member?<Link href="/register">Register</Link>
                     
                        {/* <button className={form_style.form_btns}>Register Now</button> */}
                    </div>
                </div>
            </div>
       </form>
        </div>
       
    </main>
      </>
  );
}

export default ResownerSignin;
