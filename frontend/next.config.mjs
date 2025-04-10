/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        remotePatterns: [
          {
            protocol: 'http',
            hostname: 'localhost',
            port: '1337',
            pathname: '/uploads/**',
          },
          {
            protocol: 'https',
            hostname: 'res.cloudinary.com',
            pathname: '/**',
          },
        ],
      },
    experimental: {
        allowedDevOrigins: ['http://192.168.1.32:3000',   'http://192.168.1.32:3000',
            'http://localhost:3000',
            'http://127.0.0.1:3000'], 
    },
};

export default nextConfig;
