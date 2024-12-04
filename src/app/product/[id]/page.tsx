import { InfiniteMovingCards } from '@/components/infinite-moving-cards';
import ParticularProduct from '@/components/ParticularProduct';
import ProductInstaruction from '@/components/ProductInstaruction';
import { productsData } from '@/components/products';

const getProductsDetails = (id: string) => {
    const data = productsData;
    return data.filter((product) => product.id == id)
}

const page = ({ params }: { params: { id: string } }) => {
    // console.log("id", params.id)
    const result = getProductsDetails(params.id);

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
                    />
                ))}
            </div>
            {/* Product Instrn */}
            <ProductInstaruction />
            {/* Recommended Products */}
            <div className='mt-3'>
                <div className='mx-10 text-center mb-1'>
                    <h2 className='font-bold tracking-wide text-30'>
                        Recommended Products
                    </h2>
                </div>
                <div className="h-[30rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
                    <InfiniteMovingCards
                        direction="left"
                        speed="slow"
                    />
                </div>
            </div>

        </div>
    );
}

export default page