import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from '@nextui-org/react'
import { ErrorMessage, Field, FieldProps, Form, Formik } from 'formik';
import * as Yup from "yup";

const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Email required to login"),
    password: Yup.string().required("Password required to login"),
});

const AddBrand = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const handleOpen = () => {
        onOpen();
    }
    return (
        <>
            <Button color="warning" variant="shadow" onClick={handleOpen} > Add Brand </Button>

            <Modal
                className='dark text-white'
                placement='center'
                size='xs'
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalContent>
                    {() => (
                        <>
                            <Formik
                                initialValues={{ title: "", description: "", price: "", discount: "", }}
                                validationSchema={validationSchema}
                                onSubmit={async (values) => {
                                    console.log(values)
                                }}
                            >
                                <Form>
                                    <ModalHeader className="flex flex-col gap-1">Add Product</ModalHeader>
                                    <ModalBody>
                                        <div>
                                            <Field name="name" component={NameInput} />
                                            <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
                                        </div>
                                    </ModalBody>
                                    <ModalFooter>

                                        <Button type='submit' color="warning">
                                            Add
                                        </Button>

                                    </ModalFooter>
                                </Form>
                            </Formik>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}

const NameInput = ({ field }: FieldProps) => {
    return <Input maxLength={20} {...field} variant='bordered' label="Title" />;
};

export default AddBrand