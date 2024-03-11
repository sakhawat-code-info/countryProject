import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import "./Countries.css"




const Countries = () => {

    const [countries, setCountries] = useState([]);
    const loadCountryData = async () => {
        const res = await fetch('https://restcountries.com/v3.1/all');
        const data = await res.json();
        setCountries(data);
    }

    useEffect(() => {
        loadCountryData();
    }, []);


    const [visitedCountries, setVisitedCountries] = useState([]);

    const handleVisitedCountries = country => {
        const newVisitedCountry = [...visitedCountries, country]
        setVisitedCountries(newVisitedCountry);
    }



    return (
        <div>
            <h2>All Countries {countries.length}</h2>

            <div>
                Already visited {visitedCountries.length}
                <ul>
                    {
                        visitedCountries.map(country => <li>{country.name.common}</li>)
                    }
                </ul>
            </div>


            <div className="flagContainer">
                {
                    countries.map(country => <Country
                        key={country.cca3}
                        country={country}
                        handleVisitedCountries={handleVisitedCountries}
                    ></Country>)
                }

            </div>
        </div>
    );
};

export default Countries;