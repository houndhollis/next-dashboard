'use client';

import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient

export default function ReactQueryProvider({children} : React.PropsWithChildren) {
  return <QueryClientProvider client={queryClient}>
    {children}
  </QueryClientProvider>
}