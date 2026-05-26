/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['dummyjson.com', 'via.placeholder.com', 'picsum.photos'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.dummyjson.com',
            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
            {
                protocol: 'https',
                hostname: 'picsum.photos',
            },
        ],
    },
    // Ignorar errores de TypeScript durante el build
    typescript: {
        ignoreBuildErrors: true,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
}

module.exports = nextConfig