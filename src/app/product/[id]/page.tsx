import { InfiniteMovingCards } from '@/components/infinite-moving-cards';
import ParticularProductClient from '@/components/ParticularProductClient';
import ProductInstaruction from '@/components/ProductInstaruction';

const page = async ({ params }: { params: { id: string } }) => {
    const param = await params.id
    return (
        <div>
            <ParticularProductClient id={param} />
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