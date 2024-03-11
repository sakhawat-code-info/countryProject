import { useState } from 'react';
import './Country.css';

const Country = ({ country, handleVisitedCountries }) => {
    // console.log(country);
    const { name, capital, flags, cca3 } = country;

    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited);
    }


    return (
        <div className={visited ? "visitedCountry" : "country"}>
            <h3>Name : {name?.common}</h3>
            <p>Name : {capital}</p>
            <img src={flags.png} alt="" />
            <p>Code : {cca3}</p>

            <button onClick={() => handleVisitedCountries(country)}>Add to card</button>
            <br />

            <button onClick={handleVisited}>{visited ? 'Visited' : 'Visit'}</button>
            {visited && 'i have visited this country'}

        </div>
    );
};

export default Country;