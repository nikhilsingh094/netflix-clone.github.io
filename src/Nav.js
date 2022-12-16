import React, { useEffect, useState } from 'react'

import './css/nav.css'
import firebase from 'firebase'

function Nav() {
   
    const [show, setShow] = useState(false);

    const transitionNavbar = ()=>{
        if(window.scrollY>100){
            setShow(true)
        }else{
            setShow(false)
        }
    }

    useEffect(()=>{
        window.addEventListener("scroll",transitionNavbar)

        return ()=>{
            window.addEventListener("scroll",transitionNavbar)
        }
    },[])

    

  return (
    <div className={`nav ${show && "nav_black"}`}>
    <div className='nav_content'>
        <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" className='logo' alt='logo'></img>
        <img src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' className='avatar' alt='avatar' onClick={()=>firebase.auth().signOut()}></img>
    </div>

    </div>
  )
}

export default Nav