import Link from 'next/link'
import React from 'react'

const UsersPage = () => {
    return (
        <div className='min-h-screen grid place-items-center'>
            <div>
                <h1 className='text-5xl font-black'>Users Page</h1>
                <Link href="/blog" className="rounded-sm bg-white text-black p-2 font-medium">Go to Blog</Link>
            </div>
        </div>
    )
}

export default UsersPage