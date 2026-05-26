'use client'

import ProductCard from './ProductCard'

interface Product {
    id: number
    title: string
    price: number
    image: string
    description: string
}

export default function ProductGrid({ products }: { products: Product[] }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    )
}