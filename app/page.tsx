import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import DataViewer from "./data-viewer";
import UserMenu from "./user-menu";
import { Suspense } from "react";

export default async function Page() {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: ['data'],
    queryFn: () => fetch("http://localhost:3000/api/data").then((res) => res.json()),
  })

  return <HydrationBoundary state={dehydrate(queryClient)}>
    <div>
      <h1>Hello Next.js!</h1>
      <hr/>
      <UserMenu />
      <hr/>
      <h2>Data</h2>
      <Suspense fallback={<div>Loading data...</div>}>
        <DataViewer />
      </Suspense>
    </div>
  </HydrationBoundary>
}