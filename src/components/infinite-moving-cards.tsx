// "use client"
// import { cn } from "@/libs/utils";
// import React, { useEffect, useState } from "react";
// import ProductCard from "@/components/ProductCard";
// import { useDispatch, useSelector } from "react-redux";
// import { RootStat } from "@/types/types";
// import { fetchProductsRealTime } from "@/config/firebase";
// import { setProductsData } from "@/store/slice";

// // const getProducts = () => {
// //     const data = productsData;
// //     return data.filter((products) => products.type === "polo" || products.type === "tee")
// // }

// export const InfiniteMovingCards = ({
//     direction = "left",
//     speed = "fast",
//     pauseOnHover = true,
//     className,
// }: {
//     direction?: "left" | "right";
//     speed?: "fast" | "normal" | "slow";
//     pauseOnHover?: boolean;
//     className?: string;
// }) => {

//     const containerRef = React.useRef<HTMLDivElement>(null);
//     const scrollerRef = React.useRef<HTMLUListElement>(null);

//     useEffect(() => {
//         addAnimation();
//     }, []);
//     const [start, setStart] = useState(false);
//     function addAnimation() {
//         if (containerRef.current && scrollerRef.current) {
//             const scrollerContent = Array.from(scrollerRef.current.children);

//             scrollerContent.forEach((item) => {
//                 const duplicatedItem = item.cloneNode(true);
//                 if (scrollerRef.current) {
//                     scrollerRef.current.appendChild(duplicatedItem);
//                 }
//             });

//             getDirection();
//             getSpeed();
//             setStart(true);
//         }
//     }
//     const getDirection = () => {
//         if (containerRef.current) {
//             if (direction === "left") {
//                 containerRef.current.style.setProperty(
//                     "--animation-direction",
//                     "forwards"
//                 );
//             } else {
//                 containerRef.current.style.setProperty(
//                     "--animation-direction",
//                     "reverse"
//                 );
//             }
//         }
//     };
//     const getSpeed = () => {
//         if (containerRef.current) {
//             if (speed === "fast") {
//                 containerRef.current.style.setProperty("--animation-duration", "20s");
//             } else if (speed === "normal") {
//                 containerRef.current.style.setProperty("--animation-duration", "40s");
//             } else {
//                 containerRef.current.style.setProperty("--animation-duration", "80s");
//             }
//         }
//     };

//     const dispatch = useDispatch();
//     useEffect(() => {
//         const unsubscribe = fetchProductsRealTime((fetchedProducts) => {
//             dispatch(setProductsData(fetchedProducts));
//         });
//         return () => {
//             if (unsubscribe) {
//                 unsubscribe();
//             }
//         };
//     }, [dispatch]);

//     const data = useSelector((state: RootStat) => state.Productsdata)
//     const final = data.filter((products) => products.type === "polo" || products.type === "tee")
    
//     // const res = getProducts();
//     // console.log("Mov Res:", res)
//     return (
//         <div
//             ref={containerRef}
//             className={cn(
//                 "scroller relative z-20  max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
//                 className
//             )}
//         >
//             <ul
//                 ref={scrollerRef}
//                 className={cn(
//                     " flex min-w-full shrink-0 gap-x-[12px] py-4 w-max flex-nowrap",
//                     start && "animate-scroll ",
//                     pauseOnHover && "hover:[animation-play-state:paused]"
//                 )}
//             >
//                 {final.map((product) => (
//                     <div key={product.id}>
//                         <ProductCard
//                             id={product.id}
//                             image={product.image}
//                             title={product.title}
//                             price={product.price}
//                             category={product.category}
//                             description={product.description}
//                             type={"tee"}
//                             quantity={product.quantity}
//                         />
//                     </div>
//                 ))}
//             </ul>
//         </div>
//     );
// };

"use client"
import { cn } from "@/libs/utils";
import React, { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { RootStat } from "@/types/types";
import { fetchProductsRealTime } from "@/config/firebase";
import { setProductsData } from "@/store/slice";

export const InfiniteMovingCards = ({
    direction = "left",
    speed = "fast",
    pauseOnHover = true,
    className,
}: {
    direction?: "left" | "right";
    speed?: "fast" | "normal" | "slow";
    pauseOnHover?: boolean;
    className?: string;
}) => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const scrollerRef = React.useRef<HTMLUListElement>(null);

    const [start, setStart] = useState(false);
    const [productsLoaded, setProductsLoaded] = useState(false); // Track if products are loaded

    const dispatch = useDispatch();

    useEffect(() => {
        const unsubscribe = fetchProductsRealTime((fetchedProducts) => {
            dispatch(setProductsData(fetchedProducts));
            setProductsLoaded(true); // Mark products as loaded
        });
        return () => {
            if (unsubscribe) {
                unsubscribe();
            }
        };
    }, [dispatch]);

    const data = useSelector((state: RootStat) => state.Productsdata);
    const final = data.filter((products) => products.type === "polo" || products.type === "tee");

    useEffect(() => {
        // Add animation only after products are loaded
        if (productsLoaded && final.length > 0) {
            addAnimation();
        }
    }, [productsLoaded, final]);

    function addAnimation() {
        if (containerRef.current && scrollerRef.current) {
            const scrollerContent = Array.from(scrollerRef.current.children);

            // Clear existing duplicates to avoid repeated duplication
            scrollerContent.forEach((item, index) => {
                if (index >= final.length) {
                    scrollerRef.current?.removeChild(item);
                }
            });

            // Duplicate only after ensuring content is available
            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                if (scrollerRef.current) {
                    scrollerRef.current.appendChild(duplicatedItem);
                }
            });

            getDirection();
            getSpeed();
            setStart(true);
        }
    }

    const getDirection = () => {
        if (containerRef.current) {
            containerRef.current.style.setProperty(
                "--animation-direction",
                direction === "left" ? "forwards" : "reverse"
            );
        }
    };

    const getSpeed = () => {
        if (containerRef.current) {
            const duration =
                speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";
            containerRef.current.style.setProperty("--animation-duration", duration);
        }
    };

    return (
        <div
            ref={containerRef}
            className={cn(
                "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
                className
            )}
        >
            <ul
                ref={scrollerRef}
                className={cn(
                    "flex min-w-full shrink-0 gap-x-[12px] py-4 w-max flex-nowrap",
                    start && "animate-scroll",
                    pauseOnHover && "hover:[animation-play-state:paused]"
                )}
            >
                {final.map((product) => (
                    <div key={`${product.id}-${product.type}`}>
                        <ProductCard
                            id={product.id}
                            image={product.image}
                            title={product.title}
                            price={product.price}
                            category={product.category}
                            description={product.description}
                            type={"tee"}
                            quantity={product.quantity}
                        />
                    </div>
                ))}
            </ul>
        </div>
    );
};
