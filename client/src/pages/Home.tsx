import useUser from "../hooks/useUserContext";
import NotAuth from './NotAuth';
import UserLoading from "../components/UserLoading";

const Home = () => {
    const { user, userIsLoading } = useUser()

    if (userIsLoading) return  <div className="min-h-screen max-h-full p-20 flex justify-center items-center "> <UserLoading /></div> 
    if (!user) return <NotAuth />

    return (
        <div className="min-h-screen max-h-full p-20 flex justify-center items-center ">
            {user.email}
        </div>
    )
}

export default Home