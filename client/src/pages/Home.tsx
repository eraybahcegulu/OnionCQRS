import useUser from "../hooks/useUserContext";
import NotAuth from './NotAuth';

const Home = () => {
    const { user } = useUser()

    if(!user) return <NotAuth/>
    
    return (
        <div>{user.email}</div>
    )
}

export default Home