import { useQuery } from 'react-query';
import { Brand } from '../types/types';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue, Button } from "@nextui-org/react";
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import LoadingSpinner from './LoadingSpinner';
import BrandService from '../services/BrandService';

const GetBrands = () => {
    const { getBrandsService } = BrandService();
    const { data, isLoading } = useQuery('brands', () => getBrandsService());

    const columns = [
        {
            key: "id",
            label: "ID",
        },
        {
            key: "name",
            label: "NAME",
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
        <Table className='text-white dark max-w-[800px] max-h-[500px] ' aria-label="Category table">
            <TableHeader columns={columns}>
                {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
            </TableHeader>
            <TableBody items={data.data}>
                {
                    (item: Brand) => (
                        <TableRow key={item.id} >
                            {
                                (columnKey) => {
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

export default GetBrands;
