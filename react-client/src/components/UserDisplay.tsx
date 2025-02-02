import { DeleteUserDocument, User } from 'graphql/generated'
import React from 'react'
import { useMutation } from 'urql'

interface IUserDisplayProps {
    user: User
}

export const UserDisplay: React.FC<IUserDisplayProps> = ({ user }) => {
    const [, executeMutation] = useMutation(DeleteUserDocument)
    const handleDelete = () => {
        console.log('user.id: ', user.id)
        executeMutation({ id: user.id! })
    }
    return (
        <div
            className="rounded-sm flex justify-center items-center drop-shadow-md bg-neutral-700 w-48 h-20"
            onClick={handleDelete}
        >
            <p className="text-xl text-gray-200 font-bold bg-inherit">
                {user.name}
            </p>
        </div>
    )
}
