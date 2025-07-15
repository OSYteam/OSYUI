import Product from './Product'

import { Box } from '@mui/material'

import { mockProducts } from '../seller/productManagement/mock/products';


function ProductList() {
    return (
        <>
            {mockProducts.map((product, index) => (
                <Box
                    key={index}
                    sx={{
                        borderBottom: index !== mockProducts.length - 1 ? '1px solid #ccc' : 'none',
                        pb: 1,
                        mb: 1,
                    }}
                >
                    <Product
                        id={product.id}
                        name={product.name}
                        description={product.description}
                        discount={product.discount}
                        imageUrl={product.imageUrl}
                    />
                </Box>
            ))}
        </>
    );
}

export default ProductList
