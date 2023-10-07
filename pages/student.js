import React, {useState} from 'react';
import Router from 'next/router';
import cookie from 'js-cookie';

const Login = () => {
 

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
    <form onSubmit={handleSubmit}>
      <p>Rate and review of teacher!</p>
      Your name
      <input
        name="name"
        type="text"
        placeholder="Your full name"
       
      />
      <input
        name="rating"
        type="text"
        placeholder="Rating"
       
      />
      <input type="submit" value="Submit" />
    
    </form>
  );
};

export default Login;
