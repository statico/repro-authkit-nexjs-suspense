import { ReactNode, Suspense } from "react";
import Providers from "./providers";

export default function RootLayout({ children }: Readonly<{ children: ReactNode; }>) {
  return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<title>repro-authkit-nexjs-suspense</title>
				<style type="text/css">
					{`body { font-family: 'Inter', sans-serif; color: #ffe; background-color: #000 }`}
				</style>
			</head>
			<body>
				<Providers>
					<Suspense fallback={<div>Loading...</div>}>
						{children}
					</Suspense>
				</Providers>
			</body>
		</html>
  );
}
