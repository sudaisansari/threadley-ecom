
export const product = {
    name: "product",
    type: "document",
    title: "Product",
    fields: [
        {
            name: "title",
            type: "string",
            title: "Title",
        },
        {
            name: "price",
            type: "string",
            title: "Price",
        },
        {
            name: "image",
            type: "string",
            title: "Image",
        },
        {
            name: "category",
            type: "string",
            title: "Category",
        },
        {
            name: "description",
            type: "string",
            title: "Description",
        },
        {
            name: "type",
            type: "string",
            title: "Type",
        },
        {
            name: "id",
            type: "string",
            title: "Id",
        }           
    ]
}


// export interface Products {
//     id: string;
//     title: string;
//     price: string;
//     image: string;
//     category: 'men' | 'women';
//     description: string;
//     type: 'tee' | 'hoodie' | 'polo' | 'trouser';
// }