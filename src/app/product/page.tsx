import AllProducts from "@/components/AllProducts";
import { productsData } from "@/components/products";

const page = () => {

    return (
        <div>
            <AllProducts productsData={productsData} />
        </div>
    )
}

export default page