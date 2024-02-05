import { useQuery } from "@tanstack/react-query";
import { getCountries } from "../services/api";
import { useEffect } from "react";
import { useCountries } from "../context/CountriesContext";

function useGetCountries() {
    const { setCountries, selectedRegion } = useCountries();
    const query = useQuery({
        queryKey: ["countries", selectedRegion],
        queryFn: () => getCountries(selectedRegion),
    });

    useEffect(() => {
        if (query.data) {
            setCountries(query.data);
        }
    }, [query.data, setCountries]);

    return query;
}

export default useGetCountries


