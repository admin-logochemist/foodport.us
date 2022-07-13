/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react';
import form_style from '../styles/form.module.css'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { login, logout, } from '.././components/features/UserSlice';
import { onAuthStateChanged, signInWithEmailAndPassword, getAuth } from 'firebase/auth';
import { route } from 'next/dist/server/router';
import { app,db } from '../firebase';
import { updateDoc, collection, onSnapshot, orderBy, query, doc, getDocs, where, getDoc, addDoc, deleteDoc } from 'firebase/firestore'
function UserSignin() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const router = useRouter();

  var data = [];
  // const auth = getAuth(app);
  // useEffect(async () => {
  //   auth.onAuthStateChanged(async (userAuth) => {
  //     if (userAuth) {
  //       dispatch(login({
  //         email: userAuth.email,  
  //       }))
  //       console.log(userAuth)
  //       try {

  //         await localStorage.setItem('EMAIL', userAuth.email)
  //         await localStorage.setItem('accessToken', userAuth.accessToken)

  //       } catch (e) {
  //         console.log('é', e)
  //       }
  //     } else {
  //       dispatch(logout)
  //     }
  //   })
  // }, [])
  // const user = auth.currentUser;
  // const logintoApp = (e) => {
  //   e.preventDefault()
  //   let EMAIL = localStorage.getItem('EMAIL');
  //   signInWithEmailAndPassword(auth,email, password).then((userAuth) => {
  //     dispatch(login({
  //       email: userAuth.user.email,
  //       // uid: userAuth.user.uid,
  //       // displayName: userAuth.user.displayName,  
  //     }))
  //   })
  //   .catch((error) => {
  //     const errorCode = error.code;
  //     const errorMessage = error.message;

  //     if(errorCode === 'auth/wrong-password'){
  //       setError('Wrong Email or Password')
  //     }else{
  //       setError(errorMessage)
  //     }
  //   });
  //     if (auth.currentUser !== null) {
  //         router.push('./')

  //     }

  // }
// const fetchingData = async () => {
 
// }
// fetchingData();

  const logintoApp =  async  (e) => {
    e.preventDefault()
    const querySnapshot = await getDocs(collection(db, "userid"), where("select", "==", "admin"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      data.push({ id: doc.id, ...doc.data() })
      // setUserData(userData=>[...userData,doc.data()])
    })
    try{
    const filterData =  data.filter((item) => item.select === "user" && item.email === email && item.password === password)
    if (filterData) {
      if((filterData.length>0) && (filterData[0].select === "user")&&(filterData[0].email === email)&&(filterData[0].password === password) )
      {
         localStorage.setItem('email', filterData[0].email);
        localStorage.setItem('accid', filterData[0].accId);
         localStorage.setItem('displayName', filterData[0].name);
       router.push('/')
  
        }
        else{
          setError('Wrong Email or Password') // if email or password is wrong
        }

    }

  }
 catch(e){
   console.log(e)
 }
  }
  return (
    <>
      <Head>
        <title>Food Port</title>
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
            <span className={form_style.center_logo}><Link href="/"><img src="/img/logologo.f87723ea.png" alt="" className={form_style.form_logo} /></Link></span>
            <div className="row justify-content-center" id={form_style.form_row}>
              <div className="col-lg-10">
                <h4>{error}</h4>
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
                <div className={form_style.btns_div}>Not a Member? <Link href="/register">Register</Link>
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

export default UserSignin;
