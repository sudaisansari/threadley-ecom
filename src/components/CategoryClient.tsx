"use client"
import AllProducts from './AllProducts'
import { useSelector } from 'react-redux';
import { RootStat } from '@/types/types';


interface CategoryClientProps {
    category: string; 
}

const CategoryClient = ({ category }: CategoryClientProps) => {

    // const [products, setProducts] = useState([]);
    // useEffect(() => {
    //     const loadProducts = async () => {
    //         const data = await fetchProducts();
    //         setProducts(data);
    //     };

    //     loadProducts();
    // }, []);
    // console.log("result : ", products)
    console.log("Cat Client")
    const data = useSelector((state : RootStat) => state.Productsdata)
    const getProductsByCategory = (category: string) => {
        const prod = data
        return prod.filter((products) => products.category === category)
    }
    const result = getProductsByCategory(category)

    return (
        <div>
            <AllProducts productsData={result} />
        </div>
    )
}

export default CategoryClient