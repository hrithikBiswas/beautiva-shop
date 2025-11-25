import Header from '@/components/admin/Header';
import { getCategories, getProducts } from '@/utils/actions';

const page = async () => {
    const categories = await getCategories();
    const products = await getProducts();

    console.log(categories);
    console.log(products);

    return (
        <div className="flex-1 p-8">
            <div>dashboard page</div>
            <div className="mb-6">
                <h1 className="text-2xl font-bold">products</h1>
                {products.map((product) => (
                    <div key={product.id}>{product.name}</div>
                ))}
            </div>
            <div className="mb-6">
                <h1 className="text-2xl font-bold">Category</h1>
                {categories.map((category) => (
                    <div key={category.id}>{category.name}</div>
                ))}
            </div>
        </div>
    );
};

export default page;
