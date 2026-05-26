export default function Header() {
    return (
        <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg">
            <div className="container mx-auto px-4 py-6">
                <h1 className="text-3xl font-bold">🛍️ Mi Mini Tienda</h1>
                <p className="text-blue-100 mt-2">
                    Productos cargados desde el servidor con Next.js
                </p>
            </div>
        </header>
    )
}