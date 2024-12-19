"use client"
import { RootStat } from '@/types/types';
import ParticularProduct from './ParticularProduct';
import { useSelector } from 'react-redux';

interface ParticularProductClient {
    id: string
}

const ParticularProductClient = ({ id }: ParticularProductClient) => {
    const data = useSelector((state: RootStat) => state.Productsdata)
    const getProductsDetails = (id: string) => {
        const products = data;
        return products.filter((product) => product.id == id)
    }
    const result = getProductsDetails(id)

    return (
        <div>
            <div className="flex flex-wrap items-center justify-center md:py-6">
                {result.map((product) => (
                    <ParticularProduct
                        id={product.id}
                        key={product.id}
                        title={product.title}
                        price={product.price}
                        image={product.image}
                        description={product.description}
                        quantity={product.quantity}
                    />
                ))}
            </div>
        </div>
    )
}

export default ParticularProductClient