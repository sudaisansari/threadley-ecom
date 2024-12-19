"use client"
import AllProducts from './AllProducts'
import { RootStat } from '@/types/types';
import { useSelector } from 'react-redux';

const ProductClient = () => {
    // const [products, setProducts] = useState<Products[]>([]);
    // useEffect(() => {
    //     const loadProducts = async () => {
    //         const data = await fetchProducts();
    //         setProducts(data);
    //     };

    //     loadProducts();
    // }, []);
    // console.log("result : ", products)
    console.log("Prod Client")
    const data = useSelector((state: RootStat) => state.Productsdata)

    return (
        <div>
            <AllProducts productsData={data} />
        </div>
    )
}

export default ProductClient