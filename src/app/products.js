import { getData } from '@/lib/data.js';
import React from 'react';

const ProductsPage = async () => {
    const products = await getData();

    return (
        <div>
            <h2 className="text-gray-50 text-2xl font-semibold mb-4">Products:</h2>
            {products.map((product) => (
                <div
                    key={product.id}
                    className="p-4 mb-3 border border-gray-700 rounded bg-gray-950">
                    <h3 className="mb-2 text-gray-50 text-lg font-semibold">{product.name}</h3>
                    <p className="my-1 text-gray-400">Price: ${product.price}</p>
                    <p className="my-1 text-gray-400">Stock: {product.stock} units</p>
                </div>
            ))}
        </div>
    );
};

export default ProductsPage;
