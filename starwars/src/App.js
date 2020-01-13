import React, {useEffect, useState} from 'react';
import './App.css';

import axios from "axios"

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [data, setData] = useState()


  const url = 'https://swapi.co/api/people/'
  const getData = () => {
    axios
      .get(url)
      .then((res) => {
        // console.log(res.data.results)
        setData(res.data.results)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    getData()
  }, [])
  console.log("DATA.RESULTS: ", data)
  
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
    </div>
  );
}

export default App;
