'use client'

import { useState } from 'react'

interface Product {
    id: number
    title: string
    price: number
    image: string
    description: string
}

export default function ProductCard({ product }: { product: Product }) {
    const [isLiked, setIsLiked] = useState(false)

    return (
        <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            <div className="h-48 p-4 flex items-center justify-center bg-white">
                <img
                    src={product.image}
                    alt={product.title}
                    className="h-full object-contain"
                />
            </div>

            <div className="p-4">
                <h3 className="font-semibold text-lg text-gray-800 truncate">
                    {product.title}
                </h3>
                <p className="text-gray-600 text-sm mt-1 line-clamp-2">
                    {product.description}
                </p>
                <div className="mt-3 flex items-center justify-between">
                    <span className="text-2xl font-bold text-green-600">
                        ${product.price}
                    </span>
                    <button
                        onClick={() => setIsLiked(!isLiked)}
                        className="px-4 py-2 rounded-lg transition-colors duration-200"
                        className={`px-4 py-2 rounded-lg transition-all duration-200 ${isLiked
                            ? 'bg-red-500 text-white hover:bg-red-600'
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                            }`}
                    >
                        {isLiked ? '❤️ Me gusta' : '🤍 Dar like'}
                    </button>
                </div>
            </div>
        </div>
    )
}