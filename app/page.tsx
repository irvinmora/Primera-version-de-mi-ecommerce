import Header from './components/Header'
import ProductGrid from './components/ProductGrid'

async function getProducts() {
  try {
    const res = await fetch('https://fakestoreapi.com/products', {
      cache: 'no-store', // Cambiado para evitar caché problemática
      next: { revalidate: 60 } // Revalidar cada 60 segundos
    })

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`)
    }

    return await res.json()
  } catch (error) {
    console.error('Error fetching products:', error)
    // Retornar array vacío en caso de error
    return []
  }
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
        {products.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">No se pudieron cargar los productos. Intenta nuevamente más tarde.</p>
          </div>
        ) : (
          <ProductGrid products={products} />
        )}
      </main>
    </div>
  )
}