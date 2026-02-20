import { Button } from '@/components/ui/button'

interface PageProps {
    params: {
        slug: string
    } | Promise<{ slug: string }>
}
const page = async ({ params }: PageProps) => {

    const resolvedParams = await params;
    const slug = resolvedParams.slug;
    
    return (
        <div>
            <h1 className="text-2xl font-black">{slug}</h1>
            <Button>Sample Button</Button>
        </div>
    )
}

export default page