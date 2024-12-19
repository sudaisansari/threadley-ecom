// Import the functions you need from the SDKs you need
import { productsData } from "@/components/products";
import { Products } from "@/types/types";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { addDoc, collection, getFirestore, onSnapshot, query, updateDoc, where } from "firebase/firestore";
import { getDocs } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// Upload
export const uploadProducts = async () => {
    console.log("Called")
    try {
        const productCollection = collection(db, "products");

        for (const product of productsData) {

            const productData = {
                ...product
            };

            await addDoc(productCollection, productData);
            console.log(`Uploaded: ${product.title}`);
        }

        console.log("All products uploaded successfully!");
    } catch (error) {
        console.error("Error uploading products:", error);
    }
};



//  fetch products from Firestore
export const fetchProducts = async () => {
    console.log("fetch called")
    try {
        const productCollection = collection(db, "products");
        const querySnapshot = await getDocs(productCollection);

        const products: Products[] = [];
        querySnapshot.forEach((doc) => {
            // Get document data and add it to the products array
            products.push({ id: doc.id, ...doc.data() } as Products);
        });

        console.log("Fetched Products: ", products);
        return products;

    } catch (error) {
        console.error("Error fetching products:", error);
    }
};


export const fetchProductsRealTime = (setProducts: (products: Products[]) => void) => {
    console.log("Real-time fetch initialized");
    try {
        // Reference to the products collection
        const productCollection = collection(db, "products");

        // Listen for changes in the products collection
        const unsubscribe = onSnapshot(productCollection, (querySnapshot) => {
            const products: Products[] = [];

            querySnapshot.forEach((doc) => {
                products.push({ id: doc.id, ...doc.data() } as Products);
            });

            console.log("Fetched Products in Real-Time: ", products);

            // Update state or perform any callback with the updated products
            setProducts(products);
        });

        // Return the unsubscribe function to stop listening when needed
        return unsubscribe;

    } catch (error) {
        console.error("Error fetching products in real-time:", error);
    }
};


// Update


export const updateProductQuantity = async (productId: string, change: number) => {
    console.log(`Updating product with ID: ${productId} by: ${change}`);

    try {
        const productCollection = collection(db, "products");

        // Query Firestore for the document with the matching 'id' field
        const q = query(productCollection, where("id", "==", productId));
        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) {
            console.error("No product found with the given ID.");
            return;
        }

        // Assuming only one document matches the query
        const productDoc = querySnapshot.docs[0];
        const currentData = productDoc.data();
        const currentQuantity = currentData.quantity

        // Calculate new quantity
        const newQuantity = currentQuantity + change;

        // Prevent quantity from going negative
        if (newQuantity < 0) {
            console.warn("Quantity cannot be negative.");
            return;
        }

        // Update the quantity in Firestore
        const productRef = productDoc.ref;
        await updateDoc(productRef, { quantity: newQuantity });

        console.log(`Quantity updated successfully: ${newQuantity}`);
    } catch (error) {
        console.error("Error updating quantity:", error);
    }
};

