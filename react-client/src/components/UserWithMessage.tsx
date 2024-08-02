import { User } from 'graphql/generated'
import React from 'react'

import { MessageDisplay } from './MessageDisplay'
import { UserDisplay } from './UserDisplay'

interface IUserWithMessageProps {
    user: User
}

export const UserWithMessage: React.FC<IUserWithMessageProps> = ({ user }) => {
    return (
        <div className="flex gap-x-24 justify-center">
            <UserDisplay user={user} />
            <div>
                {user.messages?.map((message, i) => (
                    <MessageDisplay key={i} index={i} message={message} />
                ))}
            </div>
        </div>
    )
}
