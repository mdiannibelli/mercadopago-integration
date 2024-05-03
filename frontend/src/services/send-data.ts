import { ProductData } from "../interfaces/product.interface"

export const createPreference = async(productData:ProductData) => {
    try {
        if(!productData) throw new Error("No hay producto");
        const response = await fetch('http://localhost:3000/create_preference', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
        if(!response.ok) throw new Error("No se ha podido completar la solicitud" + response.status);

        const data = await response.json();
        const redirectUrl = data.redirectUrl;
        return redirectUrl; // Recibe una URL del servidor backend y la retorna
        
    } catch (error) {
        console.log(error);
        throw new Error("No se ha podido enviar el producto")
    }    
}