import React from 'react'
import { Input } from '../ui/input'

interface BasicInputProps {
    placeholder?: string;
    className?: string;
}
const BasicInput = ({ placeholder = '', className }: BasicInputProps) => {
    return (
        <Input placeholder={placeholder} className={className} />
    )
}

export default BasicInput