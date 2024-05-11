// import { useState } from 'react'
// import './App.css'

// function App() {

//   const motivaonalcode=()=>{
//     fetch("https://type.fit/api/quotes")
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(data) {
//     console.log(data);
//   });
//   }

//   return (
//       <div>
//         <div className='text'>
//             {motivaonalcode}
//         </div>
//       </div>
//   )
// }

// export default App

import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [motivationalQuote, setMotivationalQuote] = useState('');

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then(response => response.json())
      .then(data => {
        // Select a random quote from the fetched data
        const randomIndex = Math.floor(Math.random() * data.length);
        setMotivationalQuote(data[randomIndex].text);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []); // Empty dependency array ensures useEffect runs only once

  return (
    <div className='container' style={{display:"flex",alignItems:"center",flexDirection:"column",justifyContent:"center",height: "60vh",}}>
      <div style={{fontFamily:"fantasy",fontWeight:"inherit",fontSize:"25px",padding:"10px"}}>
        MISSION-1LAKH/MONTH
      </div>
      <div className='text' style={{fontFamily:"monospace",fontSize:"30px",fontWeight:"bolder"}}>
        {motivationalQuote}
      </div>
    </div>
  );
}

export default App;

