import Header from './components/Header'
import ProductGrid from './components/ProductGrid'

async function getProducts() {
  try {
    const res = await fetch('https://dummyjson.com/products', {
      next: { revalidate: 86400 } // Revalidar cada 24 horas
    })

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`)
    }

    const data = await res.json()

    // Transformar los datos al formato que espera ProductCard
    return data.products.map((product: any) => ({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.thumbnail, // DummyJSON tiene thumbnail
      description: product.description
    }))

  } catch (error) {
    console.error('Error fetching products:', error)
    // Productos de respaldo en caso de error
    return [
      {
        id: 1,
        title: "Producto de ejemplo",
        price: 99.99,
        image: "https://picsum.photos/id/20/300/300",
        description: "Producto de respaldo mientras se recupera la API."
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