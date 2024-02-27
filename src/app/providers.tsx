'use client'

import { PropsWithChildren, useState } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

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

	return <QueryClientProvider client={client}>{children}</QueryClientProvider>
}
