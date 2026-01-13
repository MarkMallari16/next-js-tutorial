import Link from "next/link"
import FirstButton from "../ui/button/FirstButton"

const BlogPage = () => {
    return (
        <div className='min-h-screen grid place-items-center'>
            <div>
                <h1 className='text-5xl font-black mb-2'>Blog Page</h1>
                <Link href="/users" className="rounded-sm bg-white text-black p-2 font-medium">Go to Users</Link>

                <FirstButton likes={10} />
            </div>
        </div>
    )
}

export default BlogPage