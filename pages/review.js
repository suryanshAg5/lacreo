import React, {useState} from 'react';
import Router from 'next/router';
import cookie from 'js-cookie';

const Login = () => {
 
  const handleClick = () => {
    alert('Success! Your review has been sent and will be used adequately to calculate the egligibility of the teacher candidate');
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    fetch(
      '/api/feedb',
      {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }
    )
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  };
  return (
    <>
    <link rel="stylesheet" href="m.css" />
    <div>
   
    <div className="form">
      <h1>
        <i>Create A New Review</i>
      </h1>
      <center>
        <form onSubmit={handleSubmit}>
        <h2>Rate and review of teacher!</h2>
      Your name<br></br>
      
      
    
        <input   name="name" type="text" placeholder="Full Name"/> <br/><br/>
        Enter Custom 4-Digit Code of teacher to review<br/>
        <input   name="code"type="text" placeholder="Custom Code (4 digit)"/> <br/><br/>
        Rate your overall experience with the teacher<br/>
        <input   name="rating"type="range"/> <br/> <br/>
        Enter your comments<br/>  
        <textarea   name="comment" cols="20" rows="5" placeholder="Your comments"></textarea><br/><br/>
        
    <button type="submit"  onClick={handleClick}><span>Submit</span></button> 
      
    
        </form>
        <br />
        <br></br> <br></br> <br></br> 
        <form action="/teacherlist">
        <button type="submit"><span>View Teacher Records</span></button> <br></br><br></br> </form>
      </center>
    </div>
  </div>
  </>
  );
};

export default Login;
