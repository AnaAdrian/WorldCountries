import { useCountries } from "../context/CountriesContext";
import Search from "./Search";
import Select from "./Select";

function Header() {
  const { setSelectedRegion, setCurrentSearch } = useCountries();

  return (
    <div className="fixed top-0 z-50 w-full bg-white p-4 shadow-md">
      <div className="max-w-md md:max-w-2xl mx-auto flex flex-col md:flex-row items-center justify-center md:space-x-4 space-y-4 md:space-y-0">
        <div className="w-full min-w-40 md:flex-1">
          <Select
            onSetValue={setSelectedRegion}
            title="Filter by region"
            sideHandler={() => setCurrentSearch("")}
          >
            <Select.Option value="">All</Select.Option>
            <Select.Option value="Africa">Africa</Select.Option>
            <Select.Option value="Americas">Americas</Select.Option>
            <Select.Option value="Asia">Asia</Select.Option>
            <Select.Option value="Europe">Europe</Select.Option>
            <Select.Option value="Oceania">Oceania</Select.Option>
          </Select>
        </div>
        <div className="w-full md:flex-2">
          <Search />
        </div>
      </div>
    </div>
  );
}

export default Header;
