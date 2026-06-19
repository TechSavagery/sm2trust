import { cn } from '@/lib/utils'
import React from 'react'

const TextAreaFiled = ({placeholder, className, label, name, id, ...props}) => {
    const inputId = id || name;
    const labelText = label || placeholder;

    return (
        <>
            <label htmlFor={inputId} className="sr-only">
                {labelText}
            </label>
            <textarea
                {...props}
                id={inputId}
                name={name}
                placeholder={placeholder}
                required
                className={cn(`px-[15px] py-[14px] outline-none border-[2px] border-primary w-full bg-transparent ${className} `)}
            />
        </>
    )
}

export default TextAreaFiled
