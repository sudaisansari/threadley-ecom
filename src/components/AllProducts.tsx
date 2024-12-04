"use client"
import ProductCard from "@/components/ProductCard";
import { useState } from "react";

interface AllProductsProps {
    productsData: Array<{
        id: string;
        title: string;
        price: string;
        image: string;
        category: 'men' | 'women';
        description: string;
        type: 'tee' | 'hoodie' | 'polo' | 'trouser';
    }>;
}

const AllProducts = ({ productsData }: AllProductsProps) => {
    const [type, setType] = useState<null | 'tee' | 'hoodie' | 'polo' | 'trouser'>(null);

    const filteredProducts = type ? productsData.filter(product => product.type === type) : productsData;

    return (
        <div>
            {/* Type Button */}
            <div className="flex flex-wrap justify-center gap-3 md:gap-4  my-3">
                <button
                    className={`px-4 py-2 border rounded ${type === null ? 'bg-gray-300' : 'bg-white'}`}
                    onClick={() => setType(null)}
                >
                    All
                </button>
                <button
                    className={`px-4 py-2 border rounded ${type === 'tee' ? 'bg-gray-300' : 'bg-white'}`}
                    onClick={() => setType('tee')}
                >
                    Tees
                </button>
                <button
                    className={`px-4 py-2 border rounded ${type === 'hoodie' ? 'bg-gray-300' : 'bg-white'}`}
                    onClick={() => setType('hoodie')}
                >
                    Hoodies
                </button>
                <button
                    className={`px-4 py-2 border rounded ${type === 'polo' ? 'bg-gray-300' : 'bg-white'}`}
                    onClick={() => setType('polo')}
                >
                    Polo Shirts
                </button>
                <button
                    className={`px-4 py-2 border rounded ${type === 'trouser' ? 'bg-gray-300' : 'bg-white'}`}
                    onClick={() => setType('trouser')}
                >
                    Trousers
                </button>
            </div>

            {/* Product Cards */}
            <div className='grid lg:grid-cols-[repeat(4,auto)] md:grid-cols-[repeat(3,auto)] justify-center gap-x-[12px] gap-y-[12px] items-center mx-2 my-3'>
                {
                    filteredProducts.length > 0 ?
                        filteredProducts.map((product) => (
                            <ProductCard
                                key={product.id}
                                title={product.title}
                                price={product.price}
                                description={product.description}
                                image={product.image}
                                id={product.id}
                                category={product.category}
                                type={product.type}
                            />
                        )) :
                        <p className='font-bold text-2xl'>No Products Found</p>
                }
            </div>
        </div>
    );
};

export default AllProducts;
