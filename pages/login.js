import React, {useState} from 'react';
import Router from 'next/router';
import cookie from 'js-cookie';

const Login = () => {
  const [loginError, setLoginError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    //call api
    fetch('/api/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((r) => {
        return r.json();
      })
      .then((data) => {
        if (data && data.error) {
          setLoginError(data.message);
        }
        if (data && data.token) {
          //set cookie
          cookie.set('token', data.token, {expires: 2});
          Router.push('/');
        }
      });
  }
  return (
    <>
    <link rel="stylesheet" href="m.css" />
       <div>
   
    
    <div className="form anim">
      <h1>
        Login
      </h1>
      <center>
        <form onSubmit={handleSubmit}>
          Enter your E-mail ID
          <br />
          <input  type="email" value={email} placeholder="E-mail ID"  onChange={(e) => setEmail(e.target.value)}/>
          <br /> <br />
          Enter your password
          <br />
          <input type="password"  value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
          <br /> <br />
          
          <button  type="submit"><span>Submit </span></button>
          {loginError && <p style={{color: 'red'}}>{loginError}</p>}
        </form>
        <br />
        <br></br>
      </center>
    </div>
  </div>
  </>
  );
};

export default Login;