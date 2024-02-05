import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import CountryList from "./components/CountryList";
import Header from "./ui/Header";
import { CountriesProvider } from "./context/CountriesContext";

const queryClient = new QueryClient({});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CountriesProvider>
        <Header />
        <CountryList />
      </CountriesProvider>
    </QueryClientProvider>
  );
}

export default App;
