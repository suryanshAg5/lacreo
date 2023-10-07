import Head from 'next/head';
import fetch from 'isomorphic-unfetch';
import useSWR from 'swr';
import Link from 'next/link';
import cookie from 'js-cookie';
import { useState } from 'react';

import { Router } from 'next/router';
function Home() {
  const handleClick = () => {
    alert('Success! Your application has been sent and will be reviewed by La Martineire and students of La Martineire to calculate your egligibility.');
  };
  const [teacherData, setTeacherData] = useState([]);
  async function fetchData() {
    const response = await fetch('/api/fetchteacher');
    const data = await response.json();
    console.log('data:', data)
    if (Array.isArray(data)) {
      setTeacherData(data);
    } else {
      console.error('Data is not an array:', data);
    }
  }
  console.log('teacherData:', teacherData);


let submitted=false;

  const handleSubmit = (e) => {
    submitted=true;
    console.log(submitted)
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    fetch(
      '/api/apply',
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
  const {data, revalidate} = useSWR('/api/me', async function(args) {
    const res = await fetch(args);
    return res.json();
  });
  if (!data) return <h1>Loading...</h1>;
  let loggedIn = false;
  if (data.email) {
    loggedIn = true;
  }
  return (
    <div>
      <Head>
        <title>Application Form</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
   
      {loggedIn && (
       <>
        <link rel="stylesheet" href="m.css" />
        <div className="form2 animtop" >
      <h1>
        <i>Apply as a teacher</i>
      </h1>
      <center>
       
      <form onSubmit={handleSubmit}>
          Enter Full Legal Name
          <br />
          <input name="name" type="text" placeholder="Full Legal Name" /> <br />
          <br />
          Enter Custom 4-Digit Code <br />
          <input name="code" type="text" placeholder="Custom Code (4 digit)" /> <br />
          <br />
          Check those that apply: <br />
          <input name="bed" type="checkbox" defaultValue="yes" />
          B.Ed
          <input name="ba"type="checkbox" defaultValue="yes" />
          B.A
          <input name="bsc"type="checkbox" defaultValue="yes" />
          B.Sc
          <input name="bped"type="checkbox" defaultValue="yes" />
                              B.P.Ed
          <input name="bcom" type="checkbox" defaultValue="yes" />
          B.Com
          <input name="bca"type="checkbox" defaultValue="yes" />
          B.C.A
           <input name="ma"type="checkbox" defaultValue="yes" />
                              M.A
          <input name="msc" type="checkbox" defaultValue="yes" />
          M.Sc
         
         
          <input name="mcom"type="checkbox" defaultValue="yes" />
          M.Com          <input name="mca"type="checkbox" defaultValue="yes" />
          M.C.A <br /> <br />
          <textarea
            name="capabilities"
            rows={5}
            cols={60}
            placeholder="Enter your work experience"
            defaultValue={""}
          />{" "}
          <br /> <br />
          Enter the preferred date for demonstration class <br />
          <input name="date" type="date" /> <br /> <br />
          <button type="submit" onClick={handleClick}><span>Submit</span></button>
        </form>
        <br />
      </center> <br></br>
    </div>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br /><br />
    <br />
    <br />
    <br />
    <br /><br />
    <br />
    <br />
    <br />
    <br /><br />
    <br />
    <br />
   
  <center><form action='/studentreviews'><button id="bu" type="viewReview"><span>View Student Reviews</span></button></form><button id="bu" type="viewReview"  onClick={() => {
              cookie.remove('token');
              revalidate();
            }}><span>Logout</span></button></center>
    
 
       </>
         
      )}
      {!loggedIn && (
       <>
       <link rel="stylesheet" href="m.css" />
       <div className="animbottom">
    <h1>
      <b>
        <big>La Martiniere for Boys</big>
      </b>
    </h1>
    <hr />
    <h1>
      <i>Registration Portal</i>
    </h1>{" "}
    <hr />
    <center><form action="/login">
    <button><span>Login </span></button>
</form>
<form action="/signup">
    <button><span>Sign Up </span></button>
</form>
    
    </center>

  </div>
       
       </>
      )}
    </div>
  );
}

export default Home;
