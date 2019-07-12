import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

import StarCharacterComp from './components/StarCharacterComp';


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [starChar, setStarChar] = useState({});
  console.log('useState:', useState('state'))

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios

      .get("https://swapi.co/api/people/")
      .then(res=>{
      console.log("response data", res)
      setStarChar(res.data.results)
    })
      .catch(err=>{
        console.log(err);
      });
  }, [])

  return (
    <div className="App">
      
      <StarCharacterComp starChars={starChar} />
    </div>
  );
}

// console.log(starChar)

export default App;
