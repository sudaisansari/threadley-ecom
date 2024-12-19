import CategoryClient from "@/components/CategoryClient";

// const getProductsByCategory = (category: string) => {
//   const data = productsData;
//   return data.filter((products) => products.category === category)
// }

const page = ({ params }: { params: { category: string } }) => {
  // const result = getProductsByCategory(params.category);
  return (
    <div>
      {/* <AllProducts productsData={result} /> */}
      <CategoryClient category={params.category} />
    </div>
  )
}

export default page