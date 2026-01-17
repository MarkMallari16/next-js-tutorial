import Link from "next/link"
import FirstButton from "../ui/button/FirstButton"

interface Blog {
    id: number;
    title: string;
    body: string;
}

const BlogPage = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const blogs: Blog[] = await res.json();


    return (
        <div className='min-h-screen grid place-items-center'>
            <div>
                <h1 className='text-5xl font-black mb-2'>Blog Page</h1>
                <div >
                    {
                        blogs?.slice(0, 20).map((blog) => (
                            <div key={blog.id} className="border mb-4 p-2 rounded-sm">
                                <h1 className="text-2xl font-bold">{blog.title}</h1>
                                <p className="text-gray-300">{blog.body}</p>
                                <div className="flex justify-end items-center gap-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                                    </svg>

                                    <p>{new Date().toLocaleTimeString()}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="flex justify-end gap-1 mb-8">
                    <Link href="/users" className="flex rounded-sm bg-white text-black p-2 font-medium">Go to Users
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                        </svg>
                    </Link>
                    <FirstButton likes={10} />
                </div>
            </div>

        </div>
    )
}

export default BlogPage