import { useQuery } from 'react-query';
import { Product } from '../types/types';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue, Button } from "@nextui-org/react";
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import LoadingSpinner from './LoadingSpinner';
import ProductService from '../services/ProductService';

const GetProducts = () => {
    const { getProductsService } = ProductService();

    const { data, isLoading } = useQuery('products', () => getProductsService());

    const columns = [
        {
            key: "id",
            label: "ID",
        },
        {
            key: "title",
            label: "TITLE",
        },
        {
            key: "brand",
            label: "BRAND",
        },
        {
            key: "description",
            label: "DESCRIPTION",
        },
        {
            key: "price",
            label: "PRICE",
        },
        {
            key: "discount",
            label: "DISCOUNT",
        },
        {
            key: "discountPrice",
            label: "DISCOUNT PRICE",
        },
        {
            key: "createdDate",
            label: "CREATED DATE",
        },
        {
            key: "actions",
            label: "ACTIONS",
        },
    ];

    if (isLoading) return <LoadingSpinner />
    if (!data) {
        return <div>Error</div>;
    }
    return (
        <Table className='text-white dark max-w-[1200px] max-h-[450px] ' aria-label="Category table">
            <TableHeader columns={columns}>
                {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
            </TableHeader>
            <TableBody items={data.data}>
                {
                    (item: Product) => (
                        <TableRow key={item.id} >
                            {
                                (columnKey) => {
                                    if (columnKey === "discount") {
                                        return (
                                            <TableCell>
                                                %{item.discount}
                                            </TableCell>
                                        );
                                    }
                                    if (columnKey === "brand") {
                                        return (
                                            <TableCell>
                                                {item.brand.name}
                                            </TableCell>
                                        );
                                    }
                                    if (columnKey === "price") {
                                        return (
                                            <TableCell>
                                                €{item.price}
                                            </TableCell>
                                        );
                                    }
                                    if (columnKey === "discountPrice") {
                                        return (
                                            <TableCell>
                                                €{(item.price - (item.price * item.discount / 100)).toFixed(2)}
                                            </TableCell>
                                        );
                                    }
                                    if (columnKey === "createdDate") {
                                        return (
                                            <TableCell>
                                            {new Date(item.createdDate).toLocaleString()}
                                        </TableCell>
                                        );
                                    }
                                    if (columnKey === "actions") {
                                        return (
                                            <TableCell className='flex flex-row gap-2'>
                                                <Button
                                                    color="danger" variant="shadow"> <DeleteOutlined />
                                                </Button>
                                                <Button variant="shadow"> <EditOutlined /></Button>
                                            </TableCell>
                                        );
                                    }
                                    return <TableCell>{getKeyValue(item, columnKey)}</TableCell>;
                                }}
                        </TableRow>
                    )
                }
            </TableBody>
        </Table>
    )
}

export default GetProducts;
