import ProductCard from "@/components/ProductCard";
import { productsData } from "@/components/products";

const page =  () => {
  return (
    // <Wrapper>
      <div className='grid lg:grid-cols-[repeat(4,auto)] md:grid-cols-[repeat(3,auto)] justify-center gap-x-[12px] gap-y-[12px] items-center mx-2 my-3'>
        {
          productsData.length > 0 ?
            productsData.map((product) => (
              <ProductCard
                key={product.id}
                title={product.title}
                price={product.price}
                description={product.description}
                image={product.image}
                id={product.id}
                category={product.category}
              />
            )) :
            <p className='font-bold text-2xl'>No Products Found</p>
        }
      </div>
    // </Wrapper>
  )
}

export default page