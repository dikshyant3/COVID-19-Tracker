import React, { useEffect, useState } from "react";
import "./App.css";
import { FormControl, MenuItem, Select } from "@mui/material";

// 'https://disease.sh/v3/covid-19/countries'
function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("worldwide");

  useEffect(() => {
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2,
          }));
          setCountries(countries);
        });
    };
    getCountriesData();
  }, []);

  const onCountryChange = (event) => {
    const countryCode = event.target.value;
    // console.log("from >>>>", country);
    // Note: In console it gives iso name of country whereas it shows full name in the MenuItem this is because our MenuItem has the value of isoCode of country and MenuItem shows the full name
    setCountry(countryCode);
  };
  return (
    <div className="app">
      <div className="app__header">
        <h1>COVID-19 TRACKER</h1>
        <FormControl className="app__dropdown">
          <Select variant="outlined" onChange={onCountryChange} value={country}>
            <MenuItem value="worldwide">Worldwide</MenuItem>
            {countries.map((country) => (
              <MenuItem value={country.value}>{country.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      {/* Header */}
      {/* Title+Dropdown */}

      {/* InfoBoxs */}
      {/* InfoBoxs */}
      {/* InfoBoxs */}

      {/* Table of countries */}
      {/* Graph */}

      {/* Map */}
    </div>
  );
}

export default App;
