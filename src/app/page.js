import { addProduct } from '@/lib/actions.js';
import { getData } from '@/lib/data.js';

export default async function Home() {
    const products = await getData();

    return (
        <div className="p-5 font-sans max-w-3xl mx-auto text-gray-300">
            <h1 className="text-gray-50 text-3xl font-bold mb-6">Next.js 16 Cache Feature</h1>

            <div className="mb-8 p-5 bg-gray-950 border border-gray-700 rounded-lg">
                <h2 className="mt-0 text-gray-50 text-xl font-semibold mb-4">Add New Product</h2>
                <form action={addProduct} className="flex flex-col gap-3">
                    <div>
                        <label className="block mb-1 font-medium text-gray-400">
                            Product Name:
                        </label>
                        <input
                            type="text"
                            name="name"
                            required
                            className="w-full p-2 border border-gray-600 rounded text-sm bg-gray-700 text-gray-50"
                        />
                    </div>
                    <div>
                        <label className="block mb-1 font-medium text-gray-400">Price ($):</label>
                        <input
                            type="number"
                            name="price"
                            required
                            min="0"
                            step="0.01"
                            className="w-full p-2 border border-gray-600 rounded text-sm bg-gray-700 text-gray-50"
                        />
                    </div>
                    <div>
                        <label className="block mb-1 font-medium text-gray-400">Stock:</label>
                        <input
                            type="number"
                            name="stock"
                            required
                            min="0"
                            className="w-full p-2 border border-gray-600 rounded text-sm bg-gray-700 text-gray-50"
                        />
                    </div>
                    <button
                        type="submit"
                        className="px-5 py-2.5 bg-yellow-300 text-black rounded cursor-pointer text-sm hover:bg-yellow-400">
                        Add Product
                    </button>
                </form>
            </div>

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
        </div>
    );
}
