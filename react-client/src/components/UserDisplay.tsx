import { User } from 'graphql/generated'
import React from 'react'

interface IUserDisplayProps {
    user: User
}

export const UserDisplay: React.FC<IUserDisplayProps> = ({ user }) => {
    return (
        <div className="rounded-sm flex justify-center items-center drop-shadow-md bg-neutral-700 w-48 h-20">
            <p className="text-xl text-gray-200 font-bold bg-inherit">
                {user.name}
            </p>
        </div>
    )
}
