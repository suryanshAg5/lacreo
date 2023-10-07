import React, {useState} from 'react';
import Router from 'next/router';
import cookie from 'js-cookie';

const Signup = () => {
  const [signupError, setSignupError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((r) => r.json())
      .then((data) => {
        if (data && data.error) {
          setSignupError(data.message);
        }
        if (data && data.token) {
          //set cookie
          cookie.set('token', data.token, {expires: 2});
          Router.push('/');
        }
      });
  }
  return (
   
    <><link rel="stylesheet" href="m.css" />
      
      
      <div className="form anim">

              <center>
              <h1><i>Create A New Account</i></h1> 
                <br></br>
                  <form  onSubmit={handleSubmit}>
                      Enter a valid E-mail ID
                      <br />
                      <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                  type="email" />
                      <br /> <br />
                      Enter a strong password
                      <br />
                      <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  name="password"

                  type="password" />
                      <br /> <br />
                      <button type="submit"><span>Submit</span></button>
                      {signupError && <p style={{color: 'red'}}>{signupError}</p>}
                  </form>
                  <br></br>
                  <br />
              </center>
          </div></>

  );
};

export default Signup;