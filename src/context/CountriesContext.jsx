import { createContext, useContext, useState } from "react";

const CountriesContext = createContext();

export function CountriesProvider({ children }) {
  const [countries, setCountries] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState("");
  const [currentSearch, setCurrentSearch] = useState("");
  const searchCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(currentSearch.toLowerCase())
  );

  return (
    <CountriesContext.Provider
      value={{
        countries,
        setCountries,
        selectedRegion,
        setSelectedRegion,
        currentSearch,
        setCurrentSearch,
        searchCountries,
      }}
    >
      {children}
    </CountriesContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useCountries() {
  const context = useContext(CountriesContext);
  if (!context) {
    throw new Error("useCountries must be used within a CountriesProvider");
  }
  return context;
}
