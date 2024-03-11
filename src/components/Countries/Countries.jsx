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

    return (
        <div>
            <h2>All Countries {countries.length}</h2>

            <div className="flagContainer">
                {
                    countries.map(country => <Country
                        key={country.cca3}
                        country={country}></Country>)
                }

            </div>
        </div>
    );
};

export default Countries;