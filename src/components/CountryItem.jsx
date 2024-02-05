import { FaMapMarkedAlt } from "react-icons/fa";

function CountryItem({ country }) {
  const countryName = country.name.common;

  const wikipediaUrl = `https://en.wikipedia.org/wiki/${countryName}`;
  const mapsSearchUrl = `https://www.google.com/maps/place/${countryName}`;

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl my-5">
      <div className="md:flex">
        <div className="md:flex-shrink-0 md:w-1/2">
          <img
            className="w-full h-full md:h-auto md:object-scale-down"
            src={country?.flags?.png}
            alt={`Flag of ${countryName}`}
          />
        </div>
        <div className="p-8 flex flex-col justify-between">
          <div>
            <a href={wikipediaUrl} className="hover:underline">
              <h3 className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                {country?.name?.common}
              </h3>
            </a>
            <p className="mt-1 text-lg leading-tight font-medium text-black">
              Capital: {country?.capital?.[0]}
            </p>
            <p className="mt-2 text-gray-500">Region: {country?.region}</p>
            <p className="text-gray-500">Subregion: {country?.subregion}</p>
            <p className="text-gray-500">
              Population: {country?.population.toLocaleString()}
            </p>
          </div>
          <a
            href={mapsSearchUrl}
            className="flex items-center mt-4 text-blue-500 hover:text-blue-600"
          >
            <FaMapMarkedAlt className="mr-2" />
            View on Map
          </a>
        </div>
      </div>
    </div>
  );
}

export default CountryItem;
