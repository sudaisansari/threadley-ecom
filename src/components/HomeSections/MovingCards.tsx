

import { InfiniteMovingCards } from "@/components/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
    return (
        <div className='mt-3'>
            <div className='mx-10 text-center mb-1'>
                <h2 className='font-bold tracking-wide text-30'>
                    Tee&apos;s and Polo
                </h2>
            </div>
            <div className="h-[30rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
                <InfiniteMovingCards
                    direction="left"
                    speed="slow"
                />
            </div>
        </div>
    );
}
