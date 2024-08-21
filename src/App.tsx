import Router from "./components/Router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import useInitializeAuth from "./hooks/auth/useInitializeAuth";

export default function App() {

  useInitializeAuth();
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  )
}