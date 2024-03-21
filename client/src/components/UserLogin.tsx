import { Button, Input } from "@nextui-org/react";
import { ErrorMessage, Field, FieldProps, Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { loginService } from "../services/AuthService";
import * as Yup from "yup";
import { AxiosError } from "axios";
import { ErrorResponse } from "../types/types";
import toast from 'react-hot-toast';
import { useMutation } from "react-query";
import LoadingButton from "./LoadingButton";
import useUser from "../hooks/useUserContext";

const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Email required to login"),
    password: Yup.string().required("Password required to login"),
});

const UserLogin = () => {
    const { setUser, setUserIsLoading } = useUser();
    const navigate = useNavigate();
    const loginMutation = useMutation(loginService,
        {
            onSuccess: (res) => {
                setUser(res.data)
                localStorage.setItem('refreshToken', res.data.refreshToken);
                localStorage.setItem('token', res.data.token);
                setUserIsLoading(false);
                navigate('/home')
            },
            onError: (error) => {
                const axiosError = error as AxiosError
                if (axiosError.response && axiosError.response.data) {
                    const errorMessage = (axiosError.response.data as ErrorResponse).Errors[0];
                    toast.error(errorMessage);
                }
                else {
                    toast.error("Server Error");
                }

            }
        });
    return (

        <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={async (values) => {
                await loginMutation.mutateAsync(values);
            }}
        >
            <Form>
                <div className=" bg-gradient-to-b from-[#7091ce] to-[#ffffff] border border-black shadow-md shadow-black  p-10  rounded-2xl flex flex-col gap-3 items-center justify-center">
                    <div >
                        <span className="text-2xl font-bold"> LOGIN </span>
                    </div>
                    <div className=' flex flex-col gap-10 items-center justify-center'>


                        <div className="h-[50px] w-[300px]">
                            <Field name="email" type="email" component={emailInput} />
                            <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
                        </div>

                        <div className="h-[50px] w-[300px]">
                            <Field name="password" type="password" component={passwordInput} />
                            <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
                        </div>

                        <div className="h-[50px] w-[300px] flex items-center justify-center">
                            {
                                loginMutation.isLoading
                                    ?
                                    <LoadingButton color="primary" className='absolute w-[100px]' />
                                    :
                                    <Button type='submit' className="absolute w-[100px]" color="primary" variant="shadow">
                                        Login
                                    </Button>
                            }

                            <span className="ml-auto text-blue-500 cursor-pointer" onClick={() => navigate('/register')}> Register </span>

                        </div>
                    </div>
                </div>

            </Form>
        </Formik>
    )
}

const emailInput = ({ field }: FieldProps) => {
    return <Input {...field} variant='bordered' label="Email" />;
};

const passwordInput = ({ field }: FieldProps) => {
    return <Input {...field} variant='bordered' label="Password" />;
};



export default UserLogin