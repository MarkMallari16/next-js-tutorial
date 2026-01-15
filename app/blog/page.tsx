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
                        blogs?.slice(0,20).map((blog) => (
                            <div key={blog.id} className="border mb-4 p-2 rounded-sm">
                                <h1 className="text-2xl font-bold">{blog.title}</h1>
                                <p className="text-gray-300">{blog.body}</p>
                            </div>
                        ))
                    }
                </div>

                <div className="mt-5 flex gap-2">
                    <Link href="/users" className="rounded-sm bg-white text-black p-2 font-medium">Go to Users</Link>
                    <FirstButton likes={10} />
                </div>

            </div>

        </div>
    )
}

export default BlogPage