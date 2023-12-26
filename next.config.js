/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.sanity.io',
            },
            {
                protocol: 'https',
                hostname: 'main.d1rtfn1i07f6ny.amplifyapp.com',
            },
        ],
    },
}

module.exports = nextConfig
