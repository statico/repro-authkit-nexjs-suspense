'use client';

import { useSuspenseQuery } from "@tanstack/react-query";
import { fetcher } from "./fetcher";

export default function DataViewer() {
  const { data, error } = useSuspenseQuery({
    queryKey: ["data"],
    queryFn: fetcher('/api/data'),
  });

  return <ul>
		{data?.map((item) => (
			<li key={item}>{item}</li>
		))}
	</ul>
}

