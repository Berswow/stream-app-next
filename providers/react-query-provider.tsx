'use client'

import {ReactNode} from 'react'
import {
    QueryClient,
    QueryClientProvider,
    HydrationBoundary,
    dehydrate,
} from '@tanstack/react-query'
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'

const queryClient = new QueryClient()

export const ReactQueryProvider = ({
                                       children,
                                   }: {
    children: ReactNode
}) => {
    return (
        <QueryClientProvider client={queryClient}>
            <HydrationBoundary state={dehydrate(queryClient)}>
                {children}
            </HydrationBoundary>
            <ReactQueryDevtools initialIsOpen={false}/>
        </QueryClientProvider>
    )
}