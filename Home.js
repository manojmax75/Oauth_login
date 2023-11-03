// import React  from "react";
// import { Button } from "react-bootstrap";
// import { useUserAuth } from "../context/UserAuthContext";
// import { useNavigate } from "react-router-dom";

// const Home =()=>{
//   const {user,logOut}=useUserAuth();
//   const navigate = useNavigate();
//   const handleLogout =async ()=>{
//     try{
//           await logOut()
//           navigate("/");
          
//     }catch(err){
//           console.log(err.message)
//     }
//   }
//   return(
//     <>
//            <div className="p-4 box mt-3 text-center">
//              Welcome <br></br>{user &&  user.displayName}<br></br>{user.email}
//            </div>
//            <div className="d-grid gap-2">
//              <Button variant="primary" onClick={handleLogout}>Log out </Button>
//            </div>
//          </>
//   )
// }

// export default Home

import React  from "react";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";
import { useNavigate } from "react-router-dom";
import { Navbar,NavDropdown,Container,Nav,Form } from "react-bootstrap";


const Home =()=>{
  const {user,logOut}=useUserAuth();
  const navigate = useNavigate();
  const handleLogout =async ()=>{
    try{
          await logOut()
          navigate("/");
          
    }catch(err){
          console.log(err.message)
    }
  }
  return(
    <> 
        <div className="p-4 box mt-3 text-center">
            <b>Hello Welcome </b><br></br>{user &&  user.displayName}<br></br>{user.email}
           </div>
           
           <br></br>
           <br></br>
           <br></br>
           
           
           <div className="d-grid gap-2">
             <Button variant="primary" onClick={handleLogout} className="size">Log out </Button>
           </div>
         </>
  )
}

export default Home



