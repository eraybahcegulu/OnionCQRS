import useUser from "../hooks/useUserContext";
import NotAuth from './NotAuth';
import LoadingSpinner from "../components/LoadingSpinner";
import GetProducts from "../components/GetProducts";
import { User } from "@nextui-org/react";

const Home = () => {
    const { user, userIsLoading } = useUser()

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


            <GetProducts user={user} />
        </div>
    )
}

export default Home