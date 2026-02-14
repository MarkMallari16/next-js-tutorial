
import { Button } from '@/components/ui/button';
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link'
import Image from "next/image";

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

            <div className='mx-4 lg:mx-0'>
                <h1 className='text-4xl pb-2 font-black'>List of users</h1>
                <Card>
                    <CardHeader>
                        <div className='flex items-center gap-4'>
                            <Image
                                src='/mcto.jpg'
                                alt='profile'
                                width={100}
                                height={100}
                                className='rounded-sm'/>
                            <div>
                                <CardTitle className='text-2xl lg:text-5xl'>
                                    Mark Mallari
                                </CardTitle>
                                <CardDescription>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum esse nisi eveniet dicta aliquam error non sequi soluta doloremque tempore!</CardDescription>
                            </div>
                        </div>
                        <CardAction>
                            <Button className='cursor-pointer'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                                </svg>
                                Hire Me!
                            </Button>
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
        </div>
    )
}

export default UsersPage