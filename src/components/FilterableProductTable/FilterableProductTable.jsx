import * as React from 'react';
import ProductTable from '../ProductTable/ProductTable';
import SearchBar from '../SearchBar/SearchBar';

const FilterableProductTable = () => {
    return (
        <>
            <SearchBar />
            <ProductTable />
        </>
    );
}

export default FilterableProductTable;