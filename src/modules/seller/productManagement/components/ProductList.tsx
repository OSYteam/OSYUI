import { mockProducts } from "../mock/products";

const ProductList = () => {
    return (
        <div style={{ padding: '1rem' }}>
            <h2>Stock List</h2>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
                <thead>
                    <tr>
                        <th style={thStyle}>ID</th>
                        <th style={thStyle}>Name</th>
                        <th style={thStyle}>SKU</th>
                        <th style={thStyle}>Stock</th>
                        <th style={thStyle}>Price (₺)</th>
                    </tr>
                </thead>
                <tbody>
                    {mockProducts.map((product) => (
                        <tr key={product.id}>
                            <td style={tdStyle}>{product.id}</td>
                            <td style={tdStyle}>{product.name}</td>
                            <td style={tdStyle}>{product.sku}</td>
                            <td style={tdStyle}>{product.stock}</td>
                            <td style={tdStyle}>{product.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

const thStyle: React.CSSProperties = {
    borderBottom: '1px solid #ccc',
    textAlign: 'left',
    padding: '0.5rem',
    backgroundColor: '#f9f9f9'
};

const tdStyle: React.CSSProperties = {
    padding: '0.5rem',
    borderBottom: '1px solid #eee'
};

export default ProductList;