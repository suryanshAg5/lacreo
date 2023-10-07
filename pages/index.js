import Head from 'next/head';
import fetch from 'isomorphic-unfetch';
import useSWR from 'swr';
import Link from 'next/link';
import cookie from 'js-cookie';
import { useState } from 'react';

function Home() {
 
  return (
    <div>
      <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>LA MARTINIERE FOR BOYS</title>
    <link rel="stylesheet" href="m.css" />
    <script src="s.js"></script>
  <div className='animtop'>
  
  <p id="animate" />
   
    <hr />
    <h2>Application Portal</h2>
    <center><form action="/apply">
    <button ><span>Apply </span></button> </form>         &nbsp;&nbsp;&nbsp;&nbsp;
    <form action="/review"><button ><span>Review </span></button></form>
      
    </center>
  </div>
</>

    </div>
  );
}

export default Home;
