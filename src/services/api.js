const BASE_URL = "https://restcountries.com/v3.1";

export async function getCountries(region = null) {
    const url = region ? `${BASE_URL}/region/${region}` : `${BASE_URL}/all`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Failed to fetch countries");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching countries:", error);
        return [];
    }
}

