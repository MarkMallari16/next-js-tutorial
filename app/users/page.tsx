
import { Button } from '@/components/ui/button';
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
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
            <Card>
                <CardHeader>
                    <CardTitle>Card Title</CardTitle>
                    <CardDescription>Sample Description</CardDescription>
                    <CardAction>
                        <Button className='cursor-pointer'>Sample Action</Button>
                    </CardAction>
                </CardHeader>
                <CardContent>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti harum recusandae inventore odit ut cum soluta doloremque quo velit laborum?</p>
                </CardContent>
                <CardFooter>
                    <p>Sample Footer</p>
                </CardFooter>
            </Card>
        </div>
    )
}

export default UsersPage