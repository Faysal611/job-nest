"use client";


import { Spinner } from '@/components/ui/shadcn-io/spinner';

export default function Loading() {
    return (
        <div className='relative min-h-screen'>
            <div className='absolute left-1/2 top-1/2 -translate-y-2/3'>
                <Spinner size={64}></Spinner>
            </div>
        </div>
    )
}