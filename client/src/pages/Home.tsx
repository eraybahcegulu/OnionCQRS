import useUser from "../hooks/useUserContext";
import NotAuth from './NotAuth';
import LoadingSpinner from "../components/LoadingSpinner";
import { Button, User } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";


const Home = () => {
    const { user, userIsLoading } = useUser()
    const navigate = useNavigate();
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
            <div className="flex flex-row gap-2">
                <Button color="warning" variant="shadow" onClick={() => navigate('/product')} > Product </Button>
                <Button color="warning" variant="shadow" onClick={() => navigate('/brand')}> Brand </Button>

            </div>

        </div>
    )
}

export default Home