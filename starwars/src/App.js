import React, {useEffect, useState} from 'react';
import './App.css';

import axios from "axios"

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [state, setState] = useState({ characters: [] })


  const url = 'https://swapi.co/api/people/'
  const getData = () => {
    axios
      .get(url)
      .then((res) => {
        // console.log(res.data.results)
        setState({ characters: [...state.characters, res.data.results] })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    getData()
  }, [])
  console.log("STATE.CHARACTERS: ", state.characters)

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
    </div>
  );
}

export default App;
