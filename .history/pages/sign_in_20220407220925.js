/* eslint-disable react-hooks/rules-of-hooks */
import React,{useEffect, useState} from 'react';
import form_style from '../styles/form.module.css'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { login, logout,} from './features/UserSlice';
import { onAuthStateChanged, signInWithEmailAndPassword,getAuth } from 'firebase/auth';

import { route } from 'next/dist/server/router';
import { app } from '../firebase';

function sign_in() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const router = useRouter();
    const auth = getAuth(app);
    useEffect(() => {
     onAuthStateChanged(auth,(userCredential) => {
      if (userCredential) {
        dispatch(login({
          email: userCredential.email,
          isLogin: true,
          uid: userCredential.uid,
          displayName: userCredential.displayName,
        }))
        router.push()
      } else {
        dispatch(logout)
      }
    })
   
    }, [])
    const logintoApp = async() => {
        // signInWithEmailAndPassword(auth,email, password).then((userAuth) => {
    
        //   router.push('/ResturentOwner')
        // })
      const sign = await signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    dispatch(login({
      email: userCredential.user.email,
      uid: userCredential.user.uid,
      displayName: userCredential.user.displayName,
    }))
    // const user = userCredential.user;
    alert(userCredential.user.email)
    // ...
    router.push('./ResturentOwner')
  })
  .catch((error) => {
    const errorCode = error.code;
    console.log(error.message)
    const errorMessage = error.message;
  });
      }
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

        <div className={form_style.form_img}>
            <div className={form_style.main_from}>
                <div className={form_style.upper_div}></div>    
            </div>
   
          <form >
          <span className={form_style.center_logo}> <img src="/img/logologo.f87723ea.png" alt="" className={form_style.form_logo}/></span>
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
                    <div className={form_style.btns_div}>Not a Member?  
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

export default sign_in;
