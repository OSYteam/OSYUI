import Product from './Product'

import salca from '../../assets/images/products/salca.png'
import pekmez from '../../assets/images/products/pekmez.png'
import kuruKayisi from '../../assets/images/products/kurukayısı.jpg'
import asmaYapragi from '../../assets/images/products/asmayaprak.jpg'
import { Box } from '@mui/material'

const mockProducts = [
    {
        id: 1,
        name: "Domates Salçası 5KG",
        description: "Lorem ipsum, Lorem ipsum,Lorem ipsum,Lorem ipsum,Lorem ipsum,Lorem ipsum,Lorem ipsum,Lorem ipsum,",
        price: 150,
        imageUrl: salca
    },
    {
        id: 2,
        name: "Pekmez 500ML",
        description: "Lorem ipsum, Lorem ipsum,Lorem ipsum,Lorem ipsum,Lorem ipsum,Lorem ipsum,Lorem ipsum,Lorem ipsum,",
        price: 1250,
        imageUrl: pekmez
    },
    {
        id: 3,
        name: "Kuru Kayısı 2KG",
        description: "Lorem ipsum, Lorem ipsum,Lorem ipsum,Lorem ipsum,Lorem ipsum,Lorem ipsum,Lorem ipsum,Lorem ipsum,",
        price: 3540,
        imageUrl: kuruKayisi
    },
    {
        id: 4,
        name: "Taze Asma Yaprağı 1KG",
        description: "Lorem ipsum, Lorem ipsum,Lorem ipsum,Lorem ipsum,Lorem ipsum,Lorem ipsum,Lorem ipsum,Lorem ipsum,",
        price: 1250,
        imageUrl: asmaYapragi
    },
];



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
                        price={product.price}
                        imageUrl={product.imageUrl}
                    />
                </Box>
            ))}
        </>
    );
}

export default ProductList
