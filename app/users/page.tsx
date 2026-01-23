
import Link from 'next/link'

interface User {
    id: number;
    email: string;
}

const UsersPage = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users: User[] = await res.json();

    /*
    Server Components = data + layout
    Client Components = interactivity
    */
    return (
        <div className='min-h-screen grid place-items-center'>
            <div>
                <h1 className='text-5xl font-black'>Users Page</h1>
                <div className='mt-2'>
                    {
                        users?.map((user => (
                            <li key={user.id}>
                                <p>{user.email}</p>
                            </li>
                        )))
                    }
                </div>
                <div className='mt-4'>
                    <Link href="/blog" className="rounded-sm bg-white text-black p-2 font-medium">Go to Blog</Link>
                </div>
            </div>
        </div>
    )
}

export default UsersPage