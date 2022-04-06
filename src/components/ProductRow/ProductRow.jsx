import * as React from 'react';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

const ProductRow = ({columns, row,}) => {
    return (
        <TableRow hover role="checkbox" tabIndex={-1} key={row.name}>
            {columns.map((column) => {
                const value = row[column.id];
                return (
                    <TableCell key={column.id} align={column.align}>
                    {column.format && typeof value === 'number'
                        ? column.format(value)
                        : value}
                    </TableCell>
                );
            })}
        </TableRow>
    );
}

export default ProductRow;