import { Button, Input } from "@nextui-org/react";
import { ErrorMessage, Field, FieldProps, Form, Formik, useFormikContext } from "formik";
import { useNavigate } from "react-router-dom";
import { registerService } from "../services/AuthService";
import * as Yup from "yup";
import axios, { AxiosError } from "axios";
import { ErrorResponse } from "../types/types";
import toast from 'react-hot-toast';

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
  return (

    <Formik
      initialValues={{ fullName: "", email: "", password: "", confirmPassword: "" }}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting }) => {
        try {
          await registerService(values);
          toast.success("Successfully registered");

        } catch (error) {
          if (axios.isAxiosError(error)) {
            const axiosError = error as AxiosError
            if (axiosError.response && axiosError.response.data) {
              const errorMessage = (axiosError.response.data as ErrorResponse).Errors[0];
              toast.error(errorMessage);
            }
          }
          setSubmitting(false);
        }
      }}
    >
      <InnerForm />
    </Formik>
  )
}

const InnerForm = () => {
  const { isSubmitting } = useFormikContext();
  const navigate = useNavigate();
  return (
    <Form>
      <div className='bg-white h-[500px] w-[400px] flex flex-col gap-10 items-center justify-center rounded-2xl'>
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

          <Button type='submit' disabled={isSubmitting} className="absolute" color="primary" variant="shadow">
            {isSubmitting ? 'Submitting...' : 'Register'}
          </Button>

          <span className="ml-auto text-blue-500 cursor-pointer" onClick={() => navigate('/login')}> Login </span>

        </div>
      </div>
    </Form>
  );
};

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