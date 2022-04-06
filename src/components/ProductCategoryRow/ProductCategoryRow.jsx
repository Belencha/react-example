import * as React from 'react';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

const ProductCategoryRow = () => {
    return (
        <TableRow>
            <TableCell align="center" colSpan={2}>
                Country
            </TableCell>
        </TableRow>
    );
}

export default ProductCategoryRow;