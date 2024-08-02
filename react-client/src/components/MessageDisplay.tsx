import { Message } from 'graphql/generated'
import React from 'react'

import { Branch } from './Branch'

interface IMessageDisplayProps {
    message: Message
    index: number
}

export const MessageDisplay: React.FC<IMessageDisplayProps> = ({
    message,
    index,
}) => {
    return (
        <div className="group mb-2 shrink-0 rounded-lg flex items-center drop-shadow-md bg-zinc-700 w-48 h-20 relative">
            <Branch trunk={index === 0} />
            <p className="text-sm text-gray-200 font-bold px-4 bg-inherit">
                {message.body}
            </p>
        </div>
    )
}
