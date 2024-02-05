import { useCountries } from "../context/CountriesContext";

function NoContent() {
  const { currentSearch } = useCountries();
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center p-6 max-w-lg mx-auto bg-white rounded-xl shadow-md">
        <p className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
          No Results Found
        </p>
        <p className="text-lg text-gray-600">
          We couldn&apos;t find any country matching &quot;
          <b className="text-gray-800">{currentSearch}</b>&quot;.
        </p>
        <p className="text-md text-gray-500 mt-4">
          Please try a different search term.
        </p>
      </div>
    </div>
  );
}

export default NoContent;
