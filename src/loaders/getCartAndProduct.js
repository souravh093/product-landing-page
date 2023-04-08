import { getToDb } from "../../utilities/fakeDB";


    export const productsAndCartData = async () => {
        const productsData = await fetch('https://dummyjson.com/products')
        const productsRes = await productsData.json();
        const products = productsRes.products
        const saveCart = getToDb()
        let newCart = [];
        for (const id in saveCart) {
            const foundProduct = products.find(product => product.id === parseFloat(id));
            if (foundProduct) {
                foundProduct.quantity = saveCart[id]
                newCart.push(foundProduct);
            }
        }
        return {newCart, products};
    }


    // export {productsAndCartData}