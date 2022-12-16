import React, { useRef } from 'react'
import "./css/login.css";
import { auth } from './firebase'


function SignUp() {

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register =(e)=>{
    e.preventDefault();
    
    auth.createUserWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
      ).then(authUser=>{
        console.log(authUser)
      }).catch(error=>{
        alert(error.message)
      })
   

  }

  const signIn=(e)=>{
    e.preventDefault();
    auth.signInWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
      ).then(authUser=>{
        console.log(authUser)
      }).catch(error=>{
        alert(error.message)
      })
    }
  return (
    <div className='signUpScreen'>

    <form>
        <h1>Sign In</h1>
        <input ref={emailRef} type="email" placeholder='email'/>
        <input ref ={passwordRef} type="password" placeholder='password'/>
        <button onClick={signIn}>Sign In</button>

        <h4>New to nexflix <span onClick={register}>Sign Up Now</span></h4>
    </form>
       
    </div>
  )
}

export default SignUp