import Router from "./components/Router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function App() {

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  )
}