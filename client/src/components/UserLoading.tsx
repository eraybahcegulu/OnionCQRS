import { Spinner } from '@nextui-org/react'

const UserLoading = () => {
    return (
        <div className="min-h-screen max-h-full bg-gradient-to-b  p-20 flex justify-center items-center ">
            <Spinner size='lg' color="default" />
        </div>
    )
}

export default UserLoading