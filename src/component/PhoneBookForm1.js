import React, { useState } from "react";
import ReactDOM from "react-dom";
import style from "./Style";





const PhoneBookForm1 = (props) => {
  // State
  const initState = {
    id: null,
    userFirstname: "Vivek",
    userLastname: "Guleria",
    userPhone: "7959"
  };
  const [userData, setUserData] = useState(initState);
  

  // Change Handler
  const userChangeHandler = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    },);
  };

  // Submit Handler
  const submitHandler = (e) => {
    //var x= userData.userFirstname
    //console.log(x)
    e.preventDefault();
    if (
      !userData.userFirstname ||
      !userData.userLastname ||
      !userData.userPhone
    )
      return;
    props.x(userData);
    //setUserData(initState);
    //console.log(initState)
  };

  return ( 
    <form onSubmit={submitHandler} style={style.form.container}>
      <label>First Name </label>
      

      <input
        style={style.form.inputs}
        
        name="userFirstname"
        type="text"
        value={userData.userFirstname}
        onChange={userChangeHandler}
      />
      

<label>Last Name </label>
      
      <input
        style={style.form.inputs}
        
        name="userLastname"
        type="text"
        value={userData.userLastname}
        onChange={userChangeHandler}
      />

<label>Phone no. </label>
      <br />
      <input
        style={style.form.inputs}
        
        name="userPhone"
        type="text"
        value={userData.userPhone}
        onChange={userChangeHandler}
      />

      {/* Submit Button */}
      <input
        style={style.form.submitBtn}
        className="submitButton"
        type="submit"
        value="Add User"
      />
    </form>
    
   
  );

  
};

export default PhoneBookForm1





