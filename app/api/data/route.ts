
export async function GET() {
	console.log('Waiting...');
	await new Promise((resolve) => setTimeout(resolve, 300));
	console.log('Done waiting');
	return Response.json(Array.from({ length: 10 }, (_, i) => `Item ${i + 1}`));
}
