import { CreateUserDocument } from 'graphql/generated'
import React from 'react'
import { useMutation } from 'urql'

interface ICreateUserProps {}

export const CreateUser: React.FC<ICreateUserProps> = () => {
    const [, executeMutation] = useMutation(CreateUserDocument)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (e.target[0].value) executeMutation({ name: e.target[0].value })
    }

    return (
        <>
            <h2 className="text-center text-2xl">Create User</h2>
            <div className="flex items-center justify-center">
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-2 w-1/2"
                >
                    <input type="text" placeholder="Name" name="name" />
                    <button className="p-3 rounded-md bg-green-300">
                        Create
                    </button>
                </form>
            </div>
        </>
    )
}
