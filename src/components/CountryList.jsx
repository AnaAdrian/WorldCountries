import { useEffect, useState } from "react";

import CountryItem from "./CountryItem";
import Error from "../ui/Error";
import Loader from "../ui/Loader";
import NoContent from "../ui/NoContent";
import { useGetCountries } from "../hooks/useGetCountries";
import { useCountries } from "../context/CountriesContext";
import Button from "../ui/Button";

function CountryList() {
  const [limit, setLimit] = useState(10);
  const { searchCountries, currentSearch, selectedRegion } = useCountries();
  const { data, isLoading, error } = useGetCountries();
  const countries = searchCountries.length ? searchCountries : data;
  const displayedCountries = countries?.slice(0, limit);

  useEffect(() => {
    setLimit(10);
    window.scrollTo(0, 0);
  }, [selectedRegion, currentSearch]);

  function handleLoadMore() {
    setLimit((prev) => prev + 10);
  }

  if (error) {
    return <Error />;
  }

  if (isLoading) {
    return <Loader />;
  }

  if (currentSearch && !searchCountries.length) {
    return <NoContent />;
  }

  return (
    <div className="md:mt-28 mt-48 max-w-md mx-auto md:max-w-2xl">
      {displayedCountries?.map((country) => (
        <CountryItem key={country.cca3} country={country} />
      ))}
      {limit < countries.length && (
        <Button onClick={handleLoadMore}>Load more</Button>
      )}
    </div>
  );
}

export default CountryList;
