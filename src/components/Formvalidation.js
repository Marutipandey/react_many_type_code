import React, { useState } from "react";
function Formvalidation() {
  const [user, setUser] = useState("");
  const [passwordd, setPasswordd] = useState("");
  const [userErr, setUserErr] = useState(false);
  const [passErr, setPassErr] = useState(false);

  function  loginhandeler(e){
    e.preventDefault();
    if (user.length<3 || passwordd.length<3){
        alert("please fill form")       
    }
    else{
        alert("all good")
    }
     
  }

  function userhandeler (e){
    let userlength = e.target.value;
    setUser(userlength);
    if (userlength.length<3){
        setUserErr(true)
    }
    else {
        setUserErr(false)
    }
    
  }
  
  function passwordhandeler (e){
    let userlength = e.target.value;
    setPasswordd(userlength)
;
    if (userlength.length<3){
        setPassErr(true)
    }
    else {
    setPassErr(false)
    }
  }



  return (
  <div>
         <form action="" onSubmit={loginhandeler}>
            <input type="text"onChange={userhandeler} />{userErr?<span>user not valid</span>:""} 
            <input type="text" onChange={passwordhandeler} />{passErr?<span>pass not valid</span>:""} 
            <button type="submit">submit</button>

         </form>
  </div>
  )
}
export default Formvalidation;
