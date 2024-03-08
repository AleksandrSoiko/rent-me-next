'use client'

import { PropsWithChildren, useState } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Toaster } from 'sonner'

export function Providers({ children }: PropsWithChildren) {
	const [client] = useState(
		new QueryClient({
			defaultOptions: {
				queries: {
					refetchOnWindowFocus: false,
				},
			},
		})
	)

	return (
		<QueryClientProvider client={client}>
			{children}
			<Toaster theme="light" position="top-right" duration={1500} />
		</QueryClientProvider>
	)
}
