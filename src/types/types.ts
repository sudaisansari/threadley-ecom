

export interface Products {
    id: string;
    title: string;
    price: string;
    image: string;
    category: 'men' | 'women';
    description: string;
    type: 'tee' | 'hoodie' | 'polo' | 'trouser';
}

export interface ParticularProducts {
    id: string;
    title: string;
    price: string;
    image: string;
    description: string;
}