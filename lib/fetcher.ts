import { isServer } from "@tanstack/react-query";

export function fetcher(path: string, cookie?: string ) {
	return async () => {
		const url = isServer ? `http://localhost:3000${path}` : path;

		// Prepare headers with auth cookies when on server
		const options: RequestInit = {
			credentials: 'include', // This ensures cookies are sent in browser
		};

		if (cookie) {
			options.headers = { cookie };
		}

		const res = await fetch(url, options);
		if (!res.ok) {
			throw new Error('Network response was not ok');
		}
		return res.json();
	};
}
