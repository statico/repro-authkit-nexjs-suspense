'use client';

import { useSuspenseQuery } from "@tanstack/react-query";

export default function DataViewer() {
  const { data } = useSuspenseQuery({
    queryKey: ["data"],
    queryFn: () => fetch("/api/data").then((res) => res.json()),
  });

  return <ul>
		{data?.map((item) => (
			<li key={item}>{item}</li>
		))}
	</ul>
}

