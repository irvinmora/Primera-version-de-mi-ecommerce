import Header from './components/Header'
import ProductGrid from './components/ProductGrid'

const products = [
  {
    id: 1,
    title: "Essence Mascara Lash Princess",
    price: 9.99,
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=300&h=300&fit=crop",
    description: "Máscara de pestañas voluminizadora y alargadora."
  },
  {
    id: 2,
    title: "Eyeshadow Palette with Mirror",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=300&h=300&fit=crop",
    description: "Paleta de sombras con espejo incorporado."
  },
  {
    id: 3,
    title: "Red Lipstick",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=300&h=300&fit=crop",
    description: "Labial rojo clásico y duradero."
  }
]

async function getProducts() {
  return products
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