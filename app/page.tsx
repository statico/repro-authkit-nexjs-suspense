import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import DataViewer from "../lib/data-viewer";
import UserMenu from "../lib/user-menu";
import { Suspense } from "react";
import { fetcher } from "../lib/fetcher";
import { headers } from "next/headers";

export default async function Page() {
  const queryClient = new QueryClient()

  const cookie = (await headers()).get('cookie') ?? ''

  await queryClient.prefetchQuery({
    queryKey: ['data'],
    queryFn: fetcher('/api/data', cookie),
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