
import './App.css';
import { useEffect, useState } from 'react';
import Country from './Components/Country/Country';
import Details from './Components/Details/Details';

function App() {
  const [countries, setCountries] = useState([]);
const [details, setDetails] = useState([]);

  useEffect(()=> {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => {
      setCountries(data)
      console.log(data);
    })
  }, [])

  const handleClick = (country) => {
  //  console.log(newDetail)
   setDetails(country)
  }
  return (
    <div className="App">
        <h1>country loaded: {countries.length}</h1>
        <Details details={details}></Details>
        <ol>
          {
            countries.map(country => <Country country={country} key={country.alpha3Code} handleClick={handleClick} ></Country>)
          }
        </ol>
    </div>
  );
}

export default App;
