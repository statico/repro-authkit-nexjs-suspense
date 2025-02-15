
export async function GET() {
	await new Promise((resolve) => setTimeout(resolve, 300));
	return Response.json(Array.from({ length: 10 }, (_, i) => `Item ${i + 1}`));
}
