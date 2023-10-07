import React, {useState} from 'react';
import Router from 'next/router';
import cookie from 'js-cookie';

const Login = () => {
 
    
    const [teacherData, setTeacherData] = useState([]);
    const [codeFilter, setCodeFilter] = useState('');
    async function fetchData() {
      const response = await fetch('/api/fetchteacher');
      const data = await response.json();
      console.log('data:', data)
      if (Array.isArray(data)) {
        setTeacherData(data);
        const degrees = [];
        
         
      } 
      else {
        console.error('Data is not an array:', data);
      }
     
  }
    console.log('teacherData:', teacherData);
    
    const filteredData = teacherData.filter((item) => item.code === codeFilter);

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Code filter:', codeFilter);
    };
    
  const handleFetchAndFilter = async () => {
    try {
      const response = await fetch('/api/fetchteacher');
      const data = await response.json();
      console.log('data:', data);
      if (Array.isArray(data)) {
        const filteredData = data.filter((item) => item.code === codeFilter);
        setTeacherData(filteredData);
      } else {
        console.error('Data is not an array:', data);
      }
    } catch (error) {
      console.error(error);
    }
  };
  
  return (
   <>
   <link rel="stylesheet" href="m.css" />
    <div className='list'>
    <h1><b><big>La Martiniere for Boys</big></b></h1>
    <hr/>
    <h1><i>Teachers List</i></h1> <hr/>
    <center>
    <button onClick={fetchData}> <span>Fetch Data</span></button>
    <table border='5'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Code</th>
            <th>B.Ed</th>
            <th>B.A</th>
            <th>B.Sc</th>
            <th>B.P.Ed</th>
            <th>B.Com</th>
            <th>B.C.A</th>
            <th>M.A</th>
            <th>M.Sc</th>
            <th>M.Com</th>
            <th>M.C.A</th>
            <th>Capabilities</th>
          </tr>
        </thead>
        <tbody>
        {teacherData.map((item, index) => (
  <tr key={index}>
    <td>{item.name}</td>
    <td>{item.code}</td>
    <td>{item.bed}</td>
    <td>{item.ba}</td>
    <td>{item.bsc}</td>
    <td>{item.bped}</td>
    <td>{item.bcom}</td>
    <td>{item.bca}</td>
    <td>{item.ma}</td>
    <td>{item.msc}</td>
    <td>{item.mcom}</td>
    <td>{item.mca}</td>
    <td>{item.capabilities}</td>

  </tr>
))}
        </tbody>
      </table>
      </center>
      </div>
      </>
  );
};

export default Login;
