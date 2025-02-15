import { ReactNode, Suspense } from "react";
import Providers from "./providers";

export default function RootLayout({ children }: Readonly<{ children: ReactNode; }>) {
  return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<title>repro-authkit-nexjs-suspense</title>
				<style type="text/css">
					{`body { font-family: 'Inter', sans-serif }`}
				</style>
			</head>
			<body>
				<Providers>
					{children}
				</Providers>
			</body>
		</html>
  );
}
