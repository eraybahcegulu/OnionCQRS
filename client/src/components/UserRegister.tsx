import { Button, Input } from "@nextui-org/react";
import { ErrorMessage, Field, FieldProps, Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { registerService } from "../services/AuthService";
import * as Yup from "yup";
import { AxiosError } from "axios";
import { ErrorResponse } from "../types/types";
import toast from 'react-hot-toast';
import { useMutation } from "react-query";
import LoadingButton from "./LoadingButton";

const validationSchema = Yup.object({
  fullName: Yup.string().required("Name and Surname required to register"),
  email: Yup.string().email("Invalid email format").required("Email required to register"),
  password: Yup.string().required("Password required to register"),
  confirmPassword: Yup.string()
    .nullable()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password required to register"),
});

const UserRegister = () => {
  const navigate = useNavigate();
  const registerMutation = useMutation(registerService,
    {
      onSuccess: () => {
        toast.success("Successfully registered");
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
      initialValues={{ fullName: "", email: "", password: "", confirmPassword: "" }}
      validationSchema={validationSchema}
      onSubmit={async (values) => {
        await registerMutation.mutateAsync(values);
      }}
    > 
      <Form>
        <div className=" bg-gradient-to-b from-[#9566c2] to-[#ffffff] border border-black shadow-md shadow-black p-10 rounded-2xl flex flex-col gap-3 items-center justify-center">
          <div >
            <span className="text-2xl font-bold"> REGISTER </span>
          </div>
          <div className=' flex flex-col gap-10 items-center justify-center'>
            <div className="h-[50px] w-[300px]">
              <Field name="fullName" component={fullNameInput} />
              <ErrorMessage name="fullName" component="div" className="text-red-500 text-sm" />
            </div>

            <div className="h-[50px] w-[300px]">
              <Field name="email" type="email" component={emailInput} />
              <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
            </div>

            <div className="h-[50px] w-[300px]">
              <Field name="password" type="password" component={passwordInput} />
              <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
            </div>

            <div className="h-[50px] w-[300px]">
              <Field name="confirmPassword" type="password" component={confirmPasswordInput} />
              <ErrorMessage name="confirmPassword" component="div" className="text-red-500 text-sm" />
            </div>

            <div className="h-[50px] w-[300px] flex items-center justify-center">

              {
                registerMutation.isLoading
                  ?
                  <LoadingButton color="secondary" className='absolute w-[100px]' />
                  :
                  <Button type='submit' className="absolute w-[100px]" color="secondary" variant="shadow">
                    Register
                  </Button>
              }

              <span className="ml-auto text-blue-500 cursor-pointer" onClick={() => navigate('/login')}> Login </span>

            </div>
          </div>
        </div>

      </Form>
    </Formik>
  )
}

const fullNameInput = ({ field }: FieldProps) => {
  return <Input {...field} variant='bordered' label="Name Surname" />;
};

const emailInput = ({ field }: FieldProps) => {
  return <Input {...field} variant='bordered' label="Email" />;
};

const passwordInput = ({ field }: FieldProps) => {
  return <Input {...field} variant='bordered' label="Password" />;
};

const confirmPasswordInput = ({ field }: FieldProps) => {
  return <Input {...field} variant='bordered' label="Confirm Password" />;
};

export default UserRegister