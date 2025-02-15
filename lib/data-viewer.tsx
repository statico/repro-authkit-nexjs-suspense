'use client';

import { isServer, useSuspenseQuery } from "@tanstack/react-query";
import { fetcher } from "./fetcher";

export default function DataViewer() {
  const { data, error, refetch, isFetching } = useSuspenseQuery({
    queryKey: ["data"],
    queryFn: fetcher('/api/data'),
  });

  if (error) {
    return <div>Error loading data: {error.message}</div>;
  }

  return <div>
    <button onClick={() => refetch()}>{isFetching && !isServer ? 'Refetching...' : 'Refetch'}</button>
    <ul>
      {data?.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </div>
}

