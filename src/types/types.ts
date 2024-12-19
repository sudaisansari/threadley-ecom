export interface Products {
    id: string;
    title: string;
    price: string;
    image: string;
    category: 'men' | 'women';
    description: string;
    type: 'tee' | 'hoodie' | 'polo' | 'trouser';
    quantity: number;
}

export interface roducts {
    id: string;
    title: string;
    price: string;
    image: string;
    description: string;
    category: 'men' | 'women';
    type: 'tee' | 'hoodie' | 'polo' | 'trouser';
    quantity: number; // Sum of all sizesWithQuantity
    sizesWithQuantity: {
        sm: number;
        md: number;
        lg: number;
        xl: number;
    }
}


export interface ParticularProducts {
    id: string;
    title: string;
    price: string;
    image: string;
    description: string;
    quantity: number;
}

export interface CartData {
    id: string;
    title: string;
    price: number;
    image: string;
    Quantity: number;
    SubTotal: number;
    size: 'sm' | 'md' | 'lg' | 'xl';
}

export interface RootStat {
    Productsdata: Products[];
    CartData: CartData[];
}
