import { isServer } from "@tanstack/react-query";

export function fetcher(path: string) {
	const url = isServer ? `http://localhost:3000${path}` : path;
	return () => fetch(url).then((res) => res.json());
}
