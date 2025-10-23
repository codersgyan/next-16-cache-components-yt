import { promises as fs } from 'fs';
import path from 'path';

export async function getData() {
    const filePath = path.join(process.cwd(), 'src/data/products.json');
    const fileContents = await fs.readFile(filePath, 'utf8');
    const data = JSON.parse(fileContents);

    return data;
}
