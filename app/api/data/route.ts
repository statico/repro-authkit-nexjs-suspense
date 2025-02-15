import { withAuth } from "@workos-inc/authkit-nextjs";

export async function GET() {
	const { user } = await withAuth();

	if (!user) {
		return new Response('Unauthorized', { status: 401 });
	}

	console.log('Waiting...');
	await new Promise((resolve) => setTimeout(resolve, 300));
	console.log('Done waiting');
	return Response.json(Array.from({ length: 10 }, (_, i) => `Item ${i + 1}`));
}
