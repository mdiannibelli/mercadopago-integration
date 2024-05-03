import { productData } from "../seed/ProductData"
import { createPreference } from "../services/send-data"

export default function Product() {
    const handleBuy = async() => {
        const url = await createPreference(productData);
       // console.log(url) 
        if(url) window.location.href = url; //? Recibimos la URL y redireccionamos al usuario a la pasarela de pago. 
    }
  return (
    <article className="p-8 bg-slate-800 rounded-xl text-white border border-slate-600">
      <div className="w-56 rounded-xl overflow-hidden">
        <img
          src="https://d31npzejelj8v1.cloudfront.net/media/recipemanager/recipe/1687289598_doble-carne.jpg"
          alt="Hamburguesa deliciosa"
        />
      </div>
      <div className="space-y-2 mt-2">
        <h3 className="text-3xl font-bold">{productData.title}</h3>
        <p className="text-xl font-semibold mb-2">${productData.price}</p>
        <button
          className="py-2 w-full bg-emerald-600 rounded-xl"
          onClick={handleBuy}
        >
          Comprar
        </button>
      </div>
    </article>
  )
}
