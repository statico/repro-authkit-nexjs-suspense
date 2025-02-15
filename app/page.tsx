import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import DataViewer from "./data-viewer";

export default async function Page() {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: ['data'],
    queryFn: () => fetch("http://localhost:3001/api/data").then((res) => res.json()),
  })

  return <HydrationBoundary state={dehydrate(queryClient)}>
    <div>
      <h1>Hello Next.js!</h1>
      <DataViewer />
    </div>
  </HydrationBoundary>
}