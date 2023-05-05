/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
}

module.exports = {
  ...nextConfig, 
  env: {
    baseUrl: 'https://learn-react-next-nine.vercel.app',
  },
}

