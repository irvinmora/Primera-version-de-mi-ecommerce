import Header from './components/Header'
import ProductGrid from './components/ProductGrid'

async function getProducts() {
  const res = await fetch('https://fakestoreapi.com/products', {
    cache: 'force-cache' // Vercel guardará esto en caché
  })

  if (!res.ok) {
    throw new Error('Error al cargar productos')
  }

  return res.json()
}

export default async function Home() {
  const products = await getProducts()

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Nuestros Productos ({products.length})
        </h2>
        <ProductGrid products={products} />
      </main>
    </div>
  )
}