'use client'

import { useSuspenseQuery } from "@tanstack/react-query";

export default function Page() {

  const { data } = useSuspenseQuery({
    queryKey: ["data"],
    queryFn: () => fetch("/api/data").then((res) => res.json()),
  });

  return <div>
    <h1>Hello Next.js!</h1>
    <ul>
      {data?.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </div>
}