import React from 'react'

const FirstButton = ({ likes }: { likes: number }) => {
    return (
        <>
            <button className='bg-white px-2 py-2 text-black rounded-md'>{likes} Number of likes</button>
        </>
    )
}

export default FirstButton