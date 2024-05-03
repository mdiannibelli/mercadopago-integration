import Product from "./components/Product"



function App() {

  return (
    <main className="min-h-screen flex flex-col items-center m-24">
      <div>
        <h1 className="text-4xl">Api Mercado Pago Integration</h1>
      </div>
      <div className="mt-16 flex justify-center items-center flex-col gap-8">
        <h1 className="text-2xl uppercase">Hamburguesa XL</h1>
        <Product/>
      </div>
    </main>
  )
}

export default App
