import { UserWithMessage } from 'components/UserWithMessage'
import { GetUsersDocument } from 'graphql/generated'
import { useQuery } from 'urql'

export const App = () => {
    const [results] = useQuery({
        query: GetUsersDocument,
    })
    const users = results?.data?.users
    return (
        <div className="flex flex-col justify-center gap-6 flex-wrap">
            {users?.map((user) => (
                <UserWithMessage key={user.name} user={user} />
            ))}
        </div>
    )
}
