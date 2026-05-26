/** @type {import('next').NextConfig} */
const nextConfig = {
    // Ignorar errores de TypeScript durante el build (temporal)
    typescript: {
        ignoreBuildErrors: true,
    },
    // Ignorar errores de ESLint durante el build
    eslint: {
        ignoreDuringBuilds: true,
    },
    // Configuración para imágenes externas
    images: {
        domains: ['fakestoreapi.com'],
    },
}

module.exports = nextConfig