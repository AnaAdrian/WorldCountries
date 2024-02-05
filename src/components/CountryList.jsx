import CountryItem from "./CountryItem";
import Error from "../ui/Error";
import Loader from "../ui/Loader";
import NoContent from "../ui/NoContent";
import { useGetCountries } from "../hooks/useGetCountries";
import { useCountries } from "../context/CountriesContext";

function CountryList() {
  const { searchCountries, currentSearch } = useCountries();
  const { data, isLoading, error } = useGetCountries();
  const countries = searchCountries.length ? searchCountries : data;

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
    <div className="md:mt-28 mt-48">
      {countries?.map((country) => (
        <CountryItem key={country.cca3} country={country} />
      ))}
    </div>
  );
}

export default CountryList;
