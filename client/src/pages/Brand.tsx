
import { User } from '@nextui-org/react'
import GetBrands from '../components/GetBrands'
import LoadingSpinner from '../components/LoadingSpinner'
import useUserContext from '../hooks/useUserContext'
import NotAuth from './NotAuth'
import GoHomeButton from '../components/GoHomeButton'
import AddBrand from '../components/AddBrand'

const Brand = () => {
    const { user, userIsLoading } = useUserContext()


    if (userIsLoading) return <div className="min-h-screen bg-gradient-to-b from-[#ffffff] to-[#000000] max-h-full p-20 flex justify-center items-center "> <LoadingSpinner /></div>
    if (!user) return <NotAuth />

    return (
        <div className="min-h-screen max-h-full bg-gradient-to-b from-[#ffffff] to-[#000000] p-20 flex flex-col gap-10 justify-start items-center ">
            <User
                className="bg-black text-white p-4"
                name={user.fullName}
                description={user.email}
                avatarProps={{
                    src: ""
                }}
            />
            <GoHomeButton />
            <AddBrand  />
            <GetBrands />
        </div>
    )
}

export default Brand