import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Select, SelectItem, useDisclosure } from '@nextui-org/react'
import { ErrorMessage, Field, FieldProps, Form, Formik } from 'formik';
import * as Yup from "yup";
import { useMutation, useQuery, useQueryClient } from 'react-query';
import LoadingSpinner from './LoadingSpinner';
import { Brand, ErrorResponse } from '../types/types';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { AxiosError } from 'axios';
import ProductService from '../services/ProductService';
import BrandService from '../services/BrandService';
import LoadingButton from './LoadingButton';

const validationSchema = Yup.object({
    title: Yup.string().required("Title required to add product"),
    description: Yup.string().required("Description required to add product"),
    price: Yup.number().required("Price required to add product"),
    discount: Yup.number().required("Discount required to add product"),
});

const AddProduct = () => {
    const { getBrandsService } = BrandService();
    const { data, isLoading } = useQuery('brands', () => getBrandsService());
    const { isOpen, onOpen, onClose } = useDisclosure();
    const queryClient = useQueryClient()
    const [selectedBrand, setSelectedBrand] = useState<string>('');
    const { createProductService } = ProductService();
    const handleOpen = () => {
        onOpen();
    }

    const createMutation = useMutation('createProduct', createProductService,
        {
            onSuccess: () => {
                queryClient.invalidateQueries('products')
                toast.success("Product created successfully");
                
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

    if (isLoading) return <LoadingSpinner />
    if (!data) {
        return <div>Error</div>;
    }

    if (data.data.length === 0) {
        return <div> Brand not found. Required brand to new products.</div>;
    }
    return (
        <>
            <Button color="warning" variant="shadow" onClick={handleOpen} > Add Product </Button>

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
                                    if (!selectedBrand) {
                                        return toast.error('Product brand required to create')
                                    }

                                    await createMutation.mutateAsync({
                                        title: values.title,
                                        description: values.description,
                                        brandId: selectedBrand,
                                        price: parseFloat(values.price),
                                        discount: parseFloat(values.discount),
                                        categoryIds: [1, 3]
                                    });
                                }}

                            >
                                <Form>
                                    <ModalHeader className="flex flex-col gap-1">Add Product</ModalHeader>
                                    <ModalBody>
                                        <div>
                                            <Field name="title" component={TitleInput} />
                                            <ErrorMessage name="title" component="div" className="text-red-500 text-sm" />
                                        </div>

                                        <Select
                                            label="Select category"
                                            onChange={(e) => setSelectedBrand(e.target.value)}
                                        >
                                            {data.data.map((brand: Brand) => (
                                                <SelectItem key={brand.id} value={brand.id}>
                                                    {brand.name.toUpperCase()}
                                                </SelectItem>
                                            ))}
                                        </Select>

                                        <div>
                                            <Field name="description" component={DescriptionInput} />
                                            <ErrorMessage name="description" component="div" className="text-red-500 text-sm" />
                                        </div>

                                        <div>
                                            <Field name="price" component={PriceInput} />
                                            <ErrorMessage name="price" component="div" className="text-red-500 text-sm" />
                                        </div>

                                        <div>
                                            <Field name="discount" component={DiscountInput} />
                                            <ErrorMessage name="discount" component="div" className="text-red-500 text-sm" />
                                        </div>
                                    </ModalBody>
                                    <ModalFooter>

                                        {
                                            createMutation.isLoading
                                                ?
                                                <LoadingButton color="warning" className={undefined} />
                                                :
                                                <Button type='submit' color="warning">
                                                    Add
                                                </Button>
                                        }

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

const TitleInput = ({ field }: FieldProps) => {
    return <Input maxLength={20} {...field} variant='bordered' label="Title" />;
};

const DescriptionInput = ({ field }: FieldProps) => {
    return <Input maxLength={20} {...field} variant='bordered' label="Description" />;
};

const PriceInput = ({ field }: FieldProps) => {
    return <Input maxLength={20} {...field} variant='bordered' label="Price" />;
};

const DiscountInput = ({ field }: FieldProps) => {
    return <Input maxLength={20} {...field} variant='bordered' label="Discount" />;
};


export default AddProduct