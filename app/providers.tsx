'use client'

import { ReactNode } from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { AuthKitProvider } from '@workos-inc/authkit-nextjs/components';

const queryClient = new QueryClient()

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <AuthKitProvider>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </AuthKitProvider>
  )
}