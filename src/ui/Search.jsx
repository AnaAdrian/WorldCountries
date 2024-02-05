import { useCountries } from "../context/CountriesContext";

function Search() {
  const { currentSearch, setCurrentSearch } = useCountries();

  return (
    <input
      type="text"
      placeholder="Search for a country..."
      value={currentSearch}
      onChange={(e) => setCurrentSearch(e.target.value)}
      className="w-full px-4 py-2 border rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out mx-auto"
    />
  );
}

export default Search;
