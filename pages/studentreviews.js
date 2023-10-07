import React, {useState} from 'react';
import Router from 'next/router';
import cookie from 'js-cookie';

const Login = () => {
 

    const [teacherData, setTeacherData] = useState([]);
    const [codeFilter, setCodeFilter] = useState('');
    const [averageRating, setAverageRating] = useState(null);
    const calculateAverageRating = () => {
        const ratings = reviews.map((item) => item.rating);
        const sum = ratings.reduce((acc, rating) => acc + rating, 0);
        const average = sum / ratings.length;
        return average.toFixed(2);
      };
   
  
    const filteredData = teacherData.filter((item) => item.code === codeFilter);

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Code filter:', codeFilter);
    };
   
    let ratings=[];
    const handleFetchAndFilter = async () => {
        try {
            const response = await fetch('/api/fetchreview');
            const data = await response.json();
            console.log('Data:', data);
            if (Array.isArray(data)) {
              const filteredData = data.filter((item) => item.code === codeFilter);
              setTeacherData(filteredData);
              const ratings = filteredData.map((item) => parseInt(item.rating));
              console.log('Ratings:', ratings);
              const sum = ratings.reduce((acc, rating) => acc + rating, 0);
              const average = sum / ratings.length;
              console.log('Average rating:', average.toFixed(2));
              setAverageRating(average.toFixed(2));
             } else {
              console.error('Data is not an array:', data);
            }
          } catch (error) {
            console.error('Error:', error);
          }
        };
      const ratings2 = teacherData.map((item) => item.rating);
 
  return (
   <>
   <link rel="stylesheet" href="m.css" />
    <div>
    <h1><b><big>La Martiniere for Boys</big></b></h1>
    <hr/>
    <h1><i>Student Reviews</i></h1> <hr/>
    <center>
    <form onSubmit={(e) => e.preventDefault()}>
       
          <input
            type="text"
            placeholder='Unique 4 digit code'
            value={codeFilter}
            onChange={(e) => setCodeFilter(e.target.value)}
          /><br></br>
        
        <button type="button" onClick={handleFetchAndFilter}>
            <span>Check Data</span>
          
        </button>
      </form>
   
    
    <table>
        <thead>
          <tr>
            <th>Name</th>
           
            <th>Rating</th>
            <th>Comment</th>
            
          </tr>
        </thead>
        <tbody>
        {teacherData.map((item, index) => (
  <tr key={index}>
   
    <td>{item.name}</td>
  
    <td>{item.rating}</td>
    <td>{item.comment}</td>
  </tr>
  
))}
 

        </tbody>
      </table>
      {averageRating !== null && (
          <>
           
           {averageRating>70 ? (
             <>
             <h1><b><i>You are EGLIGIBLE to be selected!</i></b></h1>
             </>
           ):(<h1><b><i>Unfortunately, you do not meet the criteria to be egligible to be selected. Please try again later</i></b></h1>)}
          </>
        )}
      </center>
      </div>

      

      </>
  );
};

export default Login;
