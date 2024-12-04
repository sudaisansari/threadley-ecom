import AllProducts from "@/components/AllProducts";
import { productsData } from "@/components/products";

const getProductsByCategory = (category: string) => {
  const data = productsData;
  return data.filter((products) => products.category === category)
}

const page = ({ params }: { params: { category: string } }) => {
  // console.log("Cat : ", params.category)
  const result = getProductsByCategory(params.category);
  // console.log("Res : ", result)
  return (
    <div>
      <AllProducts productsData={result} />
    </div>
  )
}

export default page