'use client'

import { dehydrate, HydrationBoundary, QueryClient, useSuspenseQuery } from "@tanstack/react-query";

export default async function Page() {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: ['data'],
    queryFn: () => fetch("/api/data").then((res) => res.json()),
  })

  const { data } = useSuspenseQuery({
    queryKey: ["data"],
    queryFn: () => fetch("/api/data").then((res) => res.json()),
  });

  return <HydrationBoundary state={dehydrate(queryClient)}>
    <div>
      <h1>Hello Next.js!</h1>
      <ul>
      {data?.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  </HydrationBoundary>
}