import { auth } from "firebase";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login,logout, selectUser } from "./features/userSlice";
import HomeScreen from "./HomeScreen";
import Login from "./Login";


function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(()=>{
    auth().onAuthStateChanged(user=>{
      if(user)
      {
        dispatch(login({
          uid: user.uid,
          email: user.email
        }
          
        ))
      }
      else{
        dispatch(logout)
      }
    })
  },[])
  return (
    <div>
    {
      !user ? (<Login/>) : (<HomeScreen/>)
    }
    
    </div> 
  );
}

export default App;
