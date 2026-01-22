import { Button } from '@/components/ui/button'
import React from 'react'

const FirstButton = ({ likes }: { likes: number }) => {
    return (
        <>
            <Button >{likes} Number of likes</Button>
        </>
    )
}

export default FirstButton