import useUser from "../hooks/useUserContext";
import NotAuth from './NotAuth';
import UserLoading from "../components/UserLoading";

const Home = () => {
    const { user, userIsLoading } = useUser()

    if(userIsLoading) return <UserLoading/>
    if(!user) return <NotAuth/>

    return (
        <div>{user.email}</div>
    )
}

export default Home