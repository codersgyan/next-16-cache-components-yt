import { promises as fs } from 'fs';
import { cacheTag } from 'next/cache';
import path from 'path';

export async function getData() {
    'use cache';

    cacheTag('products');

    const filePath = path.join(process.cwd(), 'src/data/products.json');
    const fileContents = await fs.readFile(filePath, 'utf8');
    const data = JSON.parse(fileContents);

    return data;
}
