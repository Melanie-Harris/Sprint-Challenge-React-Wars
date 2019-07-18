import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';


import { Container, Divider } from 'semantic-ui-react';

import StarCharacterCompMap from './components/StarCharacterCompMap';


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [starChar, setStarChar] = useState([]);
  console.log(starChar)

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

      <Container>
        <h1 className="title"> React Wars: <br/>May The Code Be With You ⚔︎</h1>
      <Divider />
        </Container>
        

      {starChar.length ? <StarCharacterCompMap characters={starChar} /> : <h1>loading</h1> }
      
    </div>
  );
}

// console.log(starChar)

export default App;
