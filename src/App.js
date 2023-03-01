import './App.css';
import Axios from 'axios'
import { useState } from 'react';

/*function App() {
  const [catFact, setCatFact] = useState("")

  const fetchCatFact = () => {
    //Easiest way of fetching data from an API
    Axios.get("https://catfact.ninja/fact").then((res) => {
      setCatFact(res.data.fact)
    })
  }

  useEffect(() => {
    fetchCatFact()
  }, [])

  

  return (
    <div className="App">
      <button onClick={fetchCatFact}>Generate Cat Fact</button>
      <p>{catFact}</p>
    </div>
  );
}*/

/* Another example of Fetching
function App() {

  const [name, setName] = useState("")
  const [person, setPerson] = useState(null)

  const fetchData = () => {
    Axios.get(`https://api.agify.io/?name=${name}`)
    .then((res) => {
      setPerson(res.data)
    })
  }

  return (
    <div className='App'>
      <input placeholder='E.g. Rildo' onChange={(event) => {setName(event.target.value)}}/>
      <button onClick={fetchData}>Predict Age</button>

      <h1>Name: {person?.name}</h1>
      <h1>Predicted Age: {person?.age}</h1>
      <h1>Count: {person?.count}</h1>
    </div>
  )
}*/

/**
 * Exercise
 */
function App() {
  const [excuse, setExcuse] = useState(null)

  const fetchExcuse = (type) => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${type}`)
    .then((res) => {
      setExcuse(res.data[0])
    })
  }

  return (
    <div className='App'>
      <h1>Generate An Excuse</h1>
      <button onClick={() => fetchExcuse("party")}>Party</button>
      <button onClick={() => fetchExcuse("family")}>Family</button>
      <button onClick={() => fetchExcuse("office")}>Office</button>
      <p style={{textTransform: 'uppercase'}}>{excuse?.category} Excuse: {excuse?.excuse}</p>
    </div>
  )
}

export default App;

 /** Other way of fetching data from an API
   * fetch("https://catfact.ninja/fact")
   * .then((res) => res.json())
   * .then((data) => {
   *  console.log(data)
   * })
   */