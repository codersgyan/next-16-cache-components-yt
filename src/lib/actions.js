'use server';

import { revalidateTag, updateTag } from 'next/cache';
import { promises as fs } from 'fs';
import path from 'path';

export async function revalidateProducts() {
    console.log('Revalidating products-data cache...');
    updateTag('products-data');
}

export async function addProduct(formData) {
    const name = formData.get('name');
    const price = formData.get('price');
    const stock = formData.get('stock');

    // Read current products
    const filePath = path.join(process.cwd(), 'src/data/products.json');
    const fileContents = await fs.readFile(filePath, 'utf8');
    const products = JSON.parse(fileContents);

    // Add new product
    const newProduct = {
        id: products.length + 1,
        name,
        price: parseFloat(price),
        stock: parseInt(stock),
    };

    products.push(newProduct);

    // Write back to file
    await fs.writeFile(filePath, JSON.stringify(products, null, 2));

    // console.log('Product added, updating cache...');
    // Update cache tag
    updateTag('products');
}
