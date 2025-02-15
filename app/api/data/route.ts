import { withAuth } from "@workos-inc/authkit-nextjs";

export async function GET() {
	const { user } = await withAuth();
	const suffix = user ? `(as ${user.firstName})` : '(as anonymous)';

	console.log('Waiting...');
	await new Promise((resolve) => setTimeout(resolve, 300));
	console.log('Done waiting');

	// Just some dummy data with a suffix to indicate the authentication state
	return Response.json(Array.from({ length: 10 }, (_, i) => `Item ${i + 1} ${suffix}`));
}
