import Header from './components/Header'
import ProductGrid from './components/ProductGrid'

async function getProducts() {
  try {
    // Cambiamos a una API más confiable (DummyJSON)
    const res = await fetch('https://dummyjson.com/products', {
      cache: 'no-store',
      next: { revalidate: 60 }
    })

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`)
    }

    const data = await res.json()
    return data.products || [] // DummyJSON devuelve { products: [] }

  } catch (error) {
    console.error('Error fetching products:', error)
    // Datos de respaldo en caso de error total
    return [
      {
        id: 1,
        title: 'Producto de prueba',
        price: 99.99,
        image: 'https://via.placeholder.com/150',
        description: 'Este es un producto de respaldo mientras la API se recupera.'
      }
    ]
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