import { LuArrowRight, LuLogOut } from 'react-icons/lu';
import UserLogin from '../components/UserLogin'

import { useNavigate } from 'react-router-dom';

const Login = () => {
    const openSession = localStorage.getItem('token') && localStorage.getItem('refreshToken');
    const navigate = useNavigate();

    return (
        <div className="min-h-screen max-h-full bg-gradient-to-b from-[#ffffff] to-[#7091ce] p-20 flex justify-center items-center ">
            {
                openSession
                    ?
                    <div className='flex flex-col gap-2 items-center justify-center '>
                        <span className='text-4xl'>Open session found</span>
                        <div className='flex flex-row gap-10 text-5xl'>
                            <LuArrowRight onClick={() => navigate('/home')} className='text-blue-600 cursor-pointer hover:scale-105 hover:text-blue-500' />
                            <LuLogOut className='text-red-600 hover:scale-105 hover:text-red-500 cursor-pointer' />
                        </div>

                    </div>
                    :
                    <UserLogin />
            }
        </div>
    )
}

export default Login