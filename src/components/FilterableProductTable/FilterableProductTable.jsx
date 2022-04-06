import * as React from 'react';
import ProductTable from '../ProductTable/ProductTable';
import SearchBar from '../SearchBar/SearchBar';
import Container from '@mui/material/Container';

const FilterableProductTable = () => {
    return (
        <Container maxWidth="lg">
            <SearchBar />
            <ProductTable />
        </Container>
    );
}

export default FilterableProductTable;