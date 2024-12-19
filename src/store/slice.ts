import { CartData, Products } from "@/types/types";
import { createSlice } from "@reduxjs/toolkit"


interface InitialState {
    Productsdata: Products[];
    CartData: CartData[];
}

const initialState: InitialState = {
    Productsdata: [],
    CartData: []
}

const Slice = createSlice({
    name: "addUserSlice",
    initialState,
    reducers: {
        addToDataCart: (state, action) => {
            console.log("Action : ", action.payload);
            const { id, title, price, image, size } = action.payload;
            //const priceU = price.replace(/, /g, '');

            // Generate a unique ID combining id and size
            const uniqueIdBase = `${id}-${size}`; // e.g., 1011-M
            let uniqueId = uniqueIdBase;

            // Check if an ID with this base already exists and add a counter
            let counter = 1;
            while (state.CartData.some((item) => item.id === uniqueId)) {
                uniqueId = `${uniqueIdBase}-${counter}`; // Append counter if duplicate exists
                counter++;
            }

            // Check if the product with same id AND size already exists in cart
            const existingProductIndex = state.CartData.findIndex(
                (item) => item.id === uniqueIdBase
            );

            if (existingProductIndex !== -1) {
                console.log("Product with same size already in Cart");
                state.CartData[existingProductIndex].Quantity += 1;
            } else {
                const data = {
                    id: uniqueId, // Use the unique ID
                    title,
                    price,
                    image,
                    Quantity: 1,
                    SubTotal: price,
                    size
                };
                state.CartData.push(data);
            }

            console.log("Data in Cart: ", state.CartData);
        },

        deleteCartItem: (state, action) => {
            const id = action.payload
            console.log("id in slice", id)
            const ids = state.CartData.map((item) => item.id)
            const index = ids.indexOf(id)
            state.CartData.splice(index, 1)
        },
        qtyAndSbTtlUpdate: (state, action) => {
            const { id, qty } = action.payload
            const ids = state.CartData.map((item) => item.id)
            const index = ids.indexOf(id)
            state.CartData[index].Quantity = qty
            state.CartData[index].SubTotal = state.CartData[index].price * qty
        },

        setProductsData: (state, action) => {
            state.Productsdata = action.payload
            console.log("Data in Slice : ", state.Productsdata)
        }
    }
})

export const { addToDataCart, deleteCartItem, qtyAndSbTtlUpdate, setProductsData } = Slice.actions
export default Slice.reducer