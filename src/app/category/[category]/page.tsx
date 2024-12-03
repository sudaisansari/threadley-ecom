import ProductCard from "@/components/ProductCard";
import { productsData } from "@/components/products";
 

const getProductsByCategory =  (category: string) => {
  const data =  productsData;
  return data.filter((products) => products.category === category) 
}

const page =  ({ params }: { params: { category: string } }) => {
    console.log("Cat : ", params.category)
  const result =  getProductsByCategory(params.category);
  console.log("Res : ", result)
  return (
    // <Wrapper>
    <div className='grid lg:grid-cols-[repeat(4,auto)] md:grid-cols-[repeat(3,auto)] justify-center gap-x-[12px] gap-y-[12px] items-center mx-2 my-3'>
        {
          result.length > 0 ?
            result.map((product) => (
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